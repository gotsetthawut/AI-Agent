import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { createLineClient, getConfigFromEnv } from "./line-client.js";

const server = new Server(
  { name: "line-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "line_send_push_message",
      description: "Send a push message to a LINE user, group, or room",
      inputSchema: {
        type: "object",
        properties: {
          to: {
            type: "string",
            description: "LINE user ID, group ID, or room ID to send the message to",
          },
          message: {
            type: "string",
            description: "Text content of the message to send",
          },
        },
        required: ["to", "message"],
      },
    },
    {
      name: "line_get_profile",
      description: "Get the profile information of a LINE user",
      inputSchema: {
        type: "object",
        properties: {
          userId: {
            type: "string",
            description: "The LINE user ID to look up",
          },
        },
        required: ["userId"],
      },
    },
    {
      name: "line_send_multicast",
      description: "Send the same message to multiple LINE users at once",
      inputSchema: {
        type: "object",
        properties: {
          userIds: {
            type: "array",
            items: { type: "string" },
            description: "List of LINE user IDs to send the message to (max 500)",
          },
          message: {
            type: "string",
            description: "Text content of the message to send",
          },
        },
        required: ["userIds", "message"],
      },
    },
    {
      name: "line_get_group_member_profile",
      description: "Get the profile of a member in a LINE group",
      inputSchema: {
        type: "object",
        properties: {
          groupId: {
            type: "string",
            description: "The LINE group ID",
          },
          userId: {
            type: "string",
            description: "The LINE user ID of the group member",
          },
        },
        required: ["groupId", "userId"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const config = getConfigFromEnv();
  const client = createLineClient(config);

  const { name, arguments: args } = request.params;

  if (name === "line_send_push_message") {
    const { to, message } = args as { to: string; message: string };
    await client.pushMessage({
      to,
      messages: [{ type: "text", text: message }],
    });
    return {
      content: [{ type: "text", text: `Message sent successfully to ${to}` }],
    };
  }

  if (name === "line_get_profile") {
    const { userId } = args as { userId: string };
    const profile = await client.getProfile(userId);
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              displayName: profile.displayName,
              userId: profile.userId,
              pictureUrl: profile.pictureUrl,
              statusMessage: profile.statusMessage,
            },
            null,
            2
          ),
        },
      ],
    };
  }

  if (name === "line_send_multicast") {
    const { userIds, message } = args as { userIds: string[]; message: string };
    await client.multicast({
      to: userIds,
      messages: [{ type: "text", text: message }],
    });
    return {
      content: [
        {
          type: "text",
          text: `Message sent successfully to ${userIds.length} users`,
        },
      ],
    };
  }

  if (name === "line_get_group_member_profile") {
    const { groupId, userId } = args as { groupId: string; userId: string };
    const profile = await client.getGroupMemberProfile(groupId, userId);
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              displayName: profile.displayName,
              userId: profile.userId,
              pictureUrl: profile.pictureUrl,
            },
            null,
            2
          ),
        },
      ],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
