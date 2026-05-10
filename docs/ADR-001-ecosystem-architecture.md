# ADR-001: AI Agent Ecosystem Architecture

**Status:** Accepted
**Date:** 2026-05-10
**Deciders:** gotsetthawut

---

## Context

A personal AI workspace was needed where multiple specialized agents can operate
independently but share knowledge persistently across sessions.

**Core problems to solve:**

1. **Stateless memory** — Claude has no memory between sessions by default. Every
   conversation starts blank, losing all prior work and context.
2. **Agent specialization** — Different tasks need different agent behaviors. A business
   validation agent and a teaching agent should not share the same instruction set.
3. **Cross-session knowledge** — Lessons learned, decisions made, and research compiled
   should accumulate over time and be retrievable by any agent in any session.
4. **Flexible operation** — The user needs both deep single-agent focus (Chat Projects)
   and collaborative multi-agent sessions (Cowork).

**Constraints:**
- Must work within Claude Projects (Chat) and Claude Cowork
- No Claude agent-to-agent API available yet — routing must be user-facilitated
- Must be maintainable by a single person without DevOps overhead

**Agents in scope:**

| Agent | Role |
|-------|------|
| BIVA | Business Idea Validation Analyst |
| KIM | Knowledge Intelligence Manager (shared vault) |
| Thomas | Personal Teaching Agent |
| Atlas | TBD — coming soon |

---

## Decision

**Separate GitHub repo per agent, with KIM as the central knowledge hub, operating
in dual mode across Claude Chat Projects and Cowork skills.**

Specifically:

1. **One repo per agent** — Each agent is fully self-contained: system prompt, templates,
   frameworks, skills, and knowledge base in its own repository.

2. **KIM as the single shared memory layer** — All agents write to KIM using a
   standardized `KIM STORE:` protocol. All agents read from KIM using `KIM RETRIEVE:`.
   KIM is the only agent that persists knowledge across sessions.

3. **Dual operating mode:**
   - **Claude Chat Projects** — One project per agent, loaded with the agent system
     prompt and relevant knowledge files. Best for deep, focused single-agent work.
   - **Cowork skills** — Each agent packaged as a `.skill` file. All skills loaded in
     one Cowork session for collaborative cross-agent work.

4. **User as orchestrator** — The user routes between agents and manually relays
   `KIM STORE:` blocks from BIVA/Thomas into the KIM project. No automated routing yet.

5. **update-all-skills.bat** — A single script in the AI-Agent hub repo that clones
   (first run) or pulls (subsequent runs) all agent repos and repackages all `.skill`
   files. Reduces multi-repo maintenance to one command.

---

## Options Considered

### Option A: Monorepo (all agents in one repo)

| Dimension | Assessment |
|-----------|------------|
| Setup complexity | Low |
| Agent isolation | Poor |
| Cowork packaging | One .skill for all agents |
| Independent updates | Not possible |
| Context bleed risk | High |

**Pros:**
- Single repo to clone and manage
- One pull updates everything

**Cons:**
- Agent instructions bleed into each other when loaded together
- Cannot install agents selectively in Cowork
- Versioning one agent forces a version bump on all agents
- No independent knowledge bases per agent

**Verdict:** Rejected. Agent isolation is non-negotiable for correct behavior.

---

### Option B: Separate repos + KIM as hub ✅ Chosen

| Dimension | Assessment |
|-----------|------------|
| Setup complexity | Medium |
| Agent isolation | Excellent |
| Cowork packaging | One .skill per agent |
| Independent updates | Yes |
| Context bleed risk | None |

**Pros:**
- Each agent is fully self-contained and independently versioned
- Selective Cowork install — load only the agents needed for a session
- KIM solves stateless memory without coupling agent repos
- Clean pattern to add new agents (Atlas, etc.) without touching existing agents

**Cons:**
- 4 repos to manage
- Chat Project instructions require manual re-paste when agent files change
- First-time setup requires cloning all repos

**Mitigations:**
- `update-all-skills.bat` handles clone + pull + repackage in one command
- Agent system prompts (AGENT.md) are designed to be stable — rarely need re-pasting

**Verdict:** Accepted.

---

### Option C: Single Claude Project with all agents

| Dimension | Assessment |
|-----------|------------|
| Setup complexity | Very low |
| Agent isolation | None |
| Memory persistence | None |
| Scalability | Poor |

**Pros:**
- Easiest to start — one project, one setup

**Cons:**
- All agent instructions conflict in a single context window
- No persistent memory — vault resets every session
- Context window fills up quickly with multiple agent instruction sets
- Cannot scale to 4+ agents

**Verdict:** Rejected. Does not solve the memory problem and creates agent interference.

---

## Trade-off Analysis

| Decision | Trade-off |
|----------|-----------|
| Separate repos vs monorepo | More repos to manage, but clean isolation and selective Cowork installs |
| KIM as central hub vs distributed memory | Single point of knowledge management, but requires user to route KIM STORE blocks between projects |
| Dual mode (Chat + Cowork) vs one mode | More setup, but Chat Projects give deep focus while Cowork gives collaboration |
| Manual routing vs automated | Limitation today, but acceptable — no Claude agent-to-agent API exists yet |
| update-all-skills.bat vs manual updates | One extra script to maintain, but reduces 12+ manual steps to one command |

---

## Consequences

### What becomes easier
- Adding a new agent: create a new repo with the same pattern, add to update script
- Selective Cowork sessions: load only the agents relevant to current work
- Knowledge accumulation: KIM vault grows permanently across all sessions and agents
- Independent agent evolution: update Thomas without touching BIVA or KIM

### What becomes harder
- Keeping Chat Project instructions in sync: must manually re-paste when AGENT.md changes
- First-time setup: must clone all repos before first skill build
- Cross-agent awareness: agents cannot directly call each other yet

### What to revisit
- **When Claude releases agent-to-agent API:** Replace manual KIM routing with automated
  handoffs. BIVA and Thomas would push directly to KIM without user relay.
- **When Atlas is defined:** Add `atlas-agent` repo to the ecosystem, update
  `update-all-skills.bat`, and define Atlas role in `CROSS_AGENT_PROTOCOL.md`.
- **If repo count grows past 6:** Consider a lightweight CI/CD pipeline to auto-build
  `.skill` files and publish them as GitHub Release assets.

---

## Action Items

- [ ] Run `update-all-skills.bat` to clone all repos and build `.skill` files
- [ ] Create 4 Claude Chat Projects at claude.ai/projects (BIVA, KIM, Thomas, Atlas)
- [ ] Install thomas.skill, kim.skill, biva.skill in Cowork
- [ ] Define Atlas role and build out `atlas-agent` repo content
- [ ] Add GitHub Action to notify on key file changes (so Chat Projects stay in sync)
- [ ] Revisit direct agent-to-agent routing when Claude API supports it

---

## Related Documents

| Document | Location |
|----------|----------|
| Ecosystem setup guide | [AI-Agent/ECOSYSTEM.md](ECOSYSTEM.md) |
| Cross-agent protocol | Each agent repo: `docs/CROSS_AGENT_PROTOCOL.md` |
| KIM integration guide | thomas-agent: `docs/KIM_INTEGRATION.md` |
| Skill update script | [AI-Agent/update-all-skills.bat](update-all-skills.bat) |