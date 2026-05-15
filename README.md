# AI Agent Workspace

A collection of specialized AI agents built by [@gotsetthawut](https://github.com/gotsetthawut).

> Full setup guide: [ECOSYSTEM.md](ECOSYSTEM.md) | Main manual: [AI-AGENT-MANUAL.md](docs/AI-AGENT-MANUAL.md) | CI process: [CI-PROCESS.md](docs/CI-PROCESS.md) | Architecture decision: [ADR-001](docs/ADR-001-ecosystem-architecture.md)

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
 +---> Thomas  (teaches you) ---------> KIM STORE
 |                                           |
 +---> BIVA    (validates ideas) -----> KIM STORE
 |                                           |
 +---> KIM     (remembers everything) <------+
 |             (answers: what do we know about X?)
 |
 +---> Atlas   (coming soon)
```

KIM is the shared memory layer. Every lesson and every decision is stored there permanently.

---

## Two Ways to Operate

**Chat Projects** — one agent per project, deep focused work
**Cowork** — all agents in one session, collaborative work

---

## Quick Start

1. Read [ECOSYSTEM.md](ECOSYSTEM.md) — full setup guide
2. Create 4 Claude Projects at claude.ai/projects (one per agent)
3. Run [update-all-skills.bat](update-all-skills.bat) — clones repos and builds .skill files
4. Drag .skill files into Cowork

---

## Architecture

See [docs/ADR-001-ecosystem-architecture.md](docs/ADR-001-ecosystem-architecture.md) for the full
architecture decision record — why separate repos, why KIM as hub, trade-offs considered, and what to revisit.

---
## Manuals

| Manual | Purpose |
|--------|---------|
| [AI-AGENT-MANUAL.md](docs/AI-AGENT-MANUAL.md) | Main handbook for the AI-Agent workspace |
| [ATLAS-AEGIS-ROLE-DECISION.md](docs/ATLAS-AEGIS-ROLE-DECISION.md) | Decision record separating Atlas from the Aegis candidate |
| [ATLAS-PROJECT-SPACE.md](docs/ATLAS-PROJECT-SPACE.md) | Working space note for defining Atlas |
| [BIVA-AEGIS-VALIDATION-BRIEF.md](docs/BIVA-AEGIS-VALIDATION-BRIEF.md) | Paste-ready BIVA validation brief for the Aegis agent idea |
| [CI-PROCESS.md](docs/CI-PROCESS.md) | GitHub branch, pull request, CI, merge, release, and automation process |
| [KIM-STORE-AEGIS-PROMPT.md](docs/KIM-STORE-AEGIS-PROMPT.md) | Paste-ready KIM STORE block for the Aegis prompt draft |
| [REPOSITORY-STRUCTURE-REVIEW.md](docs/REPOSITORY-STRUCTURE-REVIEW.md) | Review of the hub repo and separate agent repo structure |

---

Built with Claude AI.
