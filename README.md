# AI Agent Workspace

A collection of specialized AI agents built by [@gotsetthawut](https://github.com/gotsetthawut).

> Full setup guide: [ECOSYSTEM.md](ECOSYSTEM.md)

---

## Agents

| Agent | Repo | Description | Status |
|-------|------|-------------|--------|
| BIVA | [gotsetthawut/BIVA](https://github.com/gotsetthawut/BIVA) | Business Idea Validation Analyst — validates startup ideas with GO / REVISE / HOLD / NO-GO decisions | Live |
| KIM | [gotsetthawut/kim-agent](https://github.com/gotsetthawut/kim-agent) | Knowledge Intelligence Manager — shared memory vault for all agents | Live |
| Thomas | [gotsetthawut/thomas-agent](https://github.com/gotsetthawut/thomas-agent) | Personal Teaching Agent — teaches, researches, and documents every lesson to KIM | Live |
| Atlas | [gotsetthawut/atlas-agent](https://github.com/gotsetthawut/atlas-agent) | Coming soon | Planned |

---

## How They Connect

```
YOU
 |
 +---> Thomas  (teaches you) -------> KIM STORE
 |                                         |
 +---> BIVA    (validates ideas) ---> KIM STORE
 |                                         |
 +---> KIM     (remembers everything) <----+
 |             (answers: what do we know about X?)
 |
 +---> Atlas   (coming soon)
```

KIM is the shared memory layer. Every lesson and every decision is stored there permanently.

---

## Two Ways to Operate

**Chat Projects** — one agent per project, deep focused work
**Cowork** — all agents in one session, collaborative work

See [ECOSYSTEM.md](ECOSYSTEM.md) for full step-by-step setup.

---

## Quick Start

1. Read [ECOSYSTEM.md](ECOSYSTEM.md)
2. Create 4 Claude Projects at claude.ai/projects (one per agent)
3. Clone repos and run `create-[agent]-skill.bat` to get `.skill` files
4. Drag `.skill` files into Cowork

---
Built with Claude AI.