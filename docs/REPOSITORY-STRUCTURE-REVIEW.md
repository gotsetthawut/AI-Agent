# Repository Structure Review

This document reviews whether the AI-Agent hub repo should contain all agent
files directly, or whether each agent should keep its own repository.

---

## Current Structure

The current design uses one hub repo plus one repo per agent.

```text
gotsetthawut/AI-Agent
  -> ecosystem overview
  -> manuals
  -> setup guides
  -> links to each agent repo
  -> shared update scripts

gotsetthawut/BIVA
  -> BIVA instructions, frameworks, templates, validation logic

gotsetthawut/kim-agent
  -> KIM instructions, memory protocol, vault behavior

gotsetthawut/thomas-agent
  -> Thomas instructions, teaching frameworks, lesson templates

gotsetthawut/atlas-agent
  -> Atlas placeholder, future role
```

---

## Recommendation

Keep the current hub-and-spoke structure.

```text
AI-Agent = hub
Each agent repo = independent spoke
KIM = shared memory layer
```

This is a good structure because each agent can evolve independently while the
AI-Agent repo stays focused on the whole system.

---

## Why This Structure Works

| Need | Why Separate Agent Repos Help |
|------|-------------------------------|
| Agent isolation | Each agent keeps its own instructions and avoids behavior mixing |
| Independent versioning | BIVA can update without forcing Thomas or KIM to change |
| Smaller context | Claude/Codex can load only the agent that matters |
| Cleaner releases | Each agent can have its own release history |
| Easier future automation | GitHub Actions can run per agent repo or at hub level |

The AI-Agent hub should explain the system. The individual agent repos should
contain the detailed behavior of each agent.

---

## What Should Stay in AI-Agent

Keep ecosystem-level files here:

- Main manual
- CI and GitHub workflow
- Agent overview
- Cross-agent usage guide
- Setup guide
- Architecture decision records
- Release strategy
- Automation plans
- Script that pulls or packages all agents

---

## What Should Stay in Each Agent Repo

Keep agent-specific files inside the agent repo:

- Agent system prompt
- Agent-specific frameworks
- Agent-specific templates
- Agent-specific examples
- Agent-specific tests
- Agent-specific release notes
- Agent-specific skill packaging scripts

Examples:

```text
BIVA repo:
  business validation frameworks
  idea intake templates
  GO / REVISE / HOLD / NO-GO decision logic

KIM repo:
  memory storage protocol
  retrieval commands
  knowledge note format

Thomas repo:
  teaching methods
  lesson templates
  learning path workflow

Atlas repo:
  future Atlas role, once defined
```

---

## What Could Be Improved

The structure is good, but the hub repo can become clearer by adding:

- `docs/AI-AGENT-MANUAL.md` as the main handbook
- `docs/CI-PROCESS.md` for GitHub workflow
- `docs/REPOSITORY-STRUCTURE-REVIEW.md` for repo architecture
- `.github/workflows/` for CI automation
- `.github/pull_request_template.md` for review discipline
- `docs/RELEASE-PROCESS.md` for versioning and release notes
- `docs/NEW-AGENT-GUIDE.md` for creating future agents

Optional future structure:

```text
AI-Agent/
  README.md
  ECOSYSTEM.md
  update-all-skills.bat
  docs/
    AI-AGENT-MANUAL.md
    CI-PROCESS.md
    REPOSITORY-STRUCTURE-REVIEW.md
    NEW-AGENT-GUIDE.md
    RELEASE-PROCESS.md
  .github/
    workflows/
    pull_request_template.md
```

---

## When to Consider Changing Structure

Consider changing away from separate repos only if:

- The agents always change together
- The agent count stays very small
- The user wants one single repo for everything
- Skill packaging becomes too hard across repos
- Cross-agent automation requires a monorepo later

At the current stage, those conditions are not strong enough to justify changing.

---

## Decision

Keep the current structure.

Use the AI-Agent repo as the command center and documentation hub. Keep each
agent in its own repo for clean behavior, cleaner updates, and easier future
automation.

