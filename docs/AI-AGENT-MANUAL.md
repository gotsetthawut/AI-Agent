# AI-Agent Manual

This is the main handbook for building, operating, and versioning the AI-Agent
workspace.

The goal of this repository is to make AI agents understandable, reusable, and
versioned through GitHub.

---

## Purpose

AI-Agent is a hub for specialized AI agents.

Each agent has a clear role, its own instructions, and a place in the larger
workflow. GitHub keeps the project versioned so local machines, Codex, Claude,
and future automations can stay synchronized.

---

## Current Agents

| Agent | Role | Use When | Repo | Status |
|-------|------|----------|------|--------|
| BIVA | Business Idea Validation Analyst | You want to test, score, or validate a business idea | gotsetthawut/BIVA | Live |
| KIM | Knowledge Intelligence Manager | You want to store, retrieve, or summarize shared knowledge | gotsetthawut/kim-agent | Live |
| Thomas | Personal Teaching Agent | You want to learn a topic, build a learning path, or create lesson notes | gotsetthawut/thomas-agent | Live |
| Atlas | Undefined future agent | Role still being designed | gotsetthawut/atlas-agent | Planned |

---

## How to Use the Files in This Repo

| File | How to Use It |
|------|---------------|
| `README.md` | Start here. It gives the short overview and links to the important manuals. |
| `ECOSYSTEM.md` | Use this for setup and daily operation of Claude Projects and Cowork skills. |
| `docs/AI-AGENT-MANUAL.md` | Use this as the main handbook for the whole AI-Agent system. |
| `docs/AI-AGENT-WORKFLOW.md` | Use this to understand how BIVA, Thomas, KIM, Atlas, Aegis, and future teams work together. |
| `docs/CI-PROCESS.md` | Use this when working with Git branches, commits, pull requests, CI, merges, and releases. |
| `docs/ADR-001-ecosystem-architecture.md` | Use this to understand why the ecosystem uses separate agent repos and KIM as the hub. |
| `docs/REPOSITORY-STRUCTURE-REVIEW.md` | Use this to decide whether the current repo structure should stay or change. |
| `update-all-skills.bat` | Use this to clone or update agent repos and rebuild Cowork skill files. |

---

## How to Use Each Agent

### BIVA

Use BIVA when you have a business idea and need structured validation.

Good prompts:

```text
Validate this idea: [your idea]
Run idea intake for: [your idea]
Score this startup idea using evidence quality
Compare these two business ideas
```

BIVA should produce decisions such as:

```text
GO
REVISE
HOLD
NO-GO
```

When BIVA creates an important decision, store the useful result in KIM.

### KIM

Use KIM as the memory layer for the whole ecosystem.

Good prompts:

```text
KIM LIST
Remember this: [important note]
What do we know about [topic]?
KIM DIGEST: [topic]
KIM STORE: [structured note from another agent]
```

KIM should hold durable knowledge that future sessions can reuse.

### Thomas

Use Thomas when you want to learn something or turn a topic into structured
knowledge.

Good prompts:

```text
Teach me [topic]
Explain [topic] like I am a beginner
Build me a learning path for [topic]
Research [topic] from scratch
Create a lesson note for [topic]
```

When Thomas creates a useful lesson or research note, store the final note in
KIM.

### Atlas

Atlas is planned but not defined yet.

Before building Atlas, decide:

- What problem Atlas solves
- What Atlas should never do
- What files Atlas needs
- How Atlas uses KIM
- Whether Atlas needs its own frameworks and templates

---

## How the Agent Repos Connect

The AI-Agent repo is the hub. Each agent repo is a separate spoke.

```text
AI-Agent
  -> explains the ecosystem
  -> links to agents
  -> stores manuals and operations
  -> coordinates updates

BIVA / KIM / Thomas / Atlas
  -> store each agent's own behavior, prompts, frameworks, and templates
```

This structure is recommended for now. See:

[REPOSITORY-STRUCTURE-REVIEW.md](REPOSITORY-STRUCTURE-REVIEW.md)

---

## Ecosystem Workflow

Use this operating loop:

```text
Brainstorm / Research / Validate
  -> Keep / Library
  -> Plan / Execute
  -> Store results back into Library
```

Main responsibilities:

| Stage | Agents | Result |
|-------|--------|--------|
| Brainstorm / Research / Validation | BIVA, Thomas | Idea validation, learning material, research |
| Keep / Library | KIM | Durable shared knowledge |
| Planning / Execution | Atlas, Aegis candidate, future execution agents | Project maps, architecture, implementation |
| Future Design | Future design team | UX, UI, design systems, prototypes |

Detailed workflow:

[AI-AGENT-WORKFLOW.md](AI-AGENT-WORKFLOW.md)

---

## Operating Model

The AI-Agent workspace has four layers.

| Layer | Responsibility |
|-------|----------------|
| User | Direction, judgment, approval |
| AI tools | Drafting, coding, reasoning, documentation |
| GitHub | Version history, collaboration, automation |
| Local clones | Day-to-day editing and testing |

The user decides what should exist. AI tools help create and improve it. GitHub
keeps the shared history. Local clones are where work happens.

---

## GitHub Workflow

Use this flow for most changes:

```text
Create branch
  -> edit locally
  -> commit
  -> push
  -> open pull request
  -> run CI
  -> merge to main
  -> pull updates elsewhere
```

Detailed instructions are in:

[CI-PROCESS.md](CI-PROCESS.md)

---

## Repository Map

```text
AI-Agent/
  README.md
  ECOSYSTEM.md
  update-all-skills.bat
  docs/
    ADR-001-ecosystem-architecture.md
    AI-AGENT-MANUAL.md
    AI-AGENT-WORKFLOW.md
    CI-PROCESS.md
    REPOSITORY-STRUCTURE-REVIEW.md
```

Recommended future folders:

```text
agents/
prompts/
workflows/
templates/
examples/
.github/workflows/
```

---

## What Belongs Here

Keep shared ecosystem documentation in this hub repository.

Good content for this repo:

- Agent overview
- Cross-agent operating model
- Setup guides
- GitHub and CI process
- Release notes
- Automation plans
- Ecosystem architecture decisions

Agent-specific implementation belongs in each agent repo.

Examples:

```text
BIVA details -> gotsetthawut/BIVA
KIM details -> gotsetthawut/kim-agent
Thomas details -> gotsetthawut/thomas-agent
Atlas details -> gotsetthawut/atlas-agent
```

---

## Manual Roadmap

Suggested future chapters:

- Agent design principles
- How to create a new agent
- How to write agent instructions
- How to connect agents through KIM
- How to package Cowork skills
- How to use Codex on this repository
- How to use Claude Projects with each agent
- How to create releases
- How to automate updates with GitHub Actions

---

## Current Next Steps

- [ ] Add first GitHub Actions CI workflow
- [ ] Define the full AI-Agent Manual structure
- [ ] Add a manual for creating a new agent
- [ ] Add release note template
- [ ] Add pull request template
- [ ] Define Atlas role
