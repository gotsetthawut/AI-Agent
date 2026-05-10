# AI Agent Workspace

A collection of specialized AI agents built by [@gotsetthawut](https://github.com/gotsetthawut).

## Agents

| Agent | Repo | Description | Status |
|-------|------|-------------|--------|
| BIVA | [gotsetthawut/BIVA](https://github.com/gotsetthawut/BIVA) | Business Idea Validation Analyst — validates startup ideas with GO / REVISE / HOLD / NO-GO decisions | Live |
| KIM | [gotsetthawut/kim-agent](https://github.com/gotsetthawut/kim-agent) | Knowledge Intelligence Manager — token-efficient local knowledge vault shared across all agents | Live |
| Thomas | [gotsetthawut/thomas-agent](https://github.com/gotsetthawut/thomas-agent) | Personal AI Teaching Agent — teaches, researches, and documents every lesson to KIM | Live |
| Atlas | [gotsetthawut/atlas-agent](https://github.com/gotsetthawut/atlas-agent) | Coming soon | Planned |

## Structure

```
AI Agent
├── BIVA      — Business Idea Validation Analyst
├── KIM       — Knowledge Intelligence Manager (shared vault)
├── Thomas    — Personal Teaching Agent
└── Atlas     — (in development)
```

## How the Agents Work Together

- **BIVA** validates business ideas and stores evidence and decisions in **KIM**
- **Thomas** teaches any topic and stores every lesson note in **KIM**
- **KIM** is the shared memory layer — all agents read from and write to it
- **Atlas** will extend the ecosystem (coming soon)

---
Built with Claude AI.