import { messagingApi } from "@line/bot-sdk";

export interface LineConfig {
  channelAccessToken: string;
  channelSecret: string;
}

export function createLineClient(config: LineConfig): messagingApi.MessagingApiClient {
  return new messagingApi.MessagingApiClient({
    channelAccessToken: config.channelAccessToken,
  });
}

export function getConfigFromEnv(): LineConfig {
  const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const channelSecret = process.env.LINE_CHANNEL_SECRET;

  if (!channelAccessToken) {
    throw new Error("LINE_CHANNEL_ACCESS_TOKEN environment variable is required");
  }
  if (!channelSecret) {
    throw new Error("LINE_CHANNEL_SECRET environment variable is required");
  }

  return { channelAccessToken, channelSecret };
}
