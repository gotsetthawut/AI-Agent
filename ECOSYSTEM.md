# AI Agent Ecosystem — Setup & Operations Guide

This guide explains how to set up and operate all four agents in both **Claude Chat Projects** and **Claude Cowork**, and how they connect through **KIM**.

---

## Architecture Overview

```
YOU
 |
 +---> [Thomas]  teaches you topics, stores lessons in KIM
 |
 +---> [BIVA]    validates business ideas, stores decisions in KIM
 |
 +---> [KIM]     shared knowledge vault — all agents read & write here
 |
 +---> [Atlas]   coming soon
```

KIM is the memory layer. Every lesson Thomas teaches and every decision BIVA makes gets stored in KIM — permanently searchable across all future sessions.

---

## Part 1: Setting Up Claude Chat Projects

Each agent gets its own Claude Project at claude.ai/projects. Do this once per agent.

---

### Step 1: Create the BIVA Project

1. Go to [claude.ai/projects](https://claude.ai/projects) → **New Project**
2. Name it: `BIVA — Business Idea Validation Analyst`
3. **Project Instructions** — paste the full content of:
   `https://github.com/gotsetthawut/BIVA/blob/main/agents/BIVA_AGENT.md`
4. **Project Knowledge** — upload these files from the BIVA repo:
   - `frameworks/` folder files (Lean Startup, RICE, SWOT, Evidence Ladder)
   - `templates/` folder files
   - `docs/CROSS_AGENT_PROTOCOL.md`
5. Save the project

**Test it:** "I have an idea: an app that helps freelancers track their energy levels. Run an idea intake."

---

### Step 2: Create the KIM Project

1. Go to [claude.ai/projects](https://claude.ai/projects) → **New Project**
2. Name it: `KIM — Knowledge Intelligence Manager`
3. **Project Instructions** — paste the full content of:
   `https://github.com/gotsetthawut/kim-agent/blob/main/SKILL.md`
4. **Project Knowledge** — upload:
   - `references/obsidian-digital-garden.md` (seed knowledge)
   - `docs/CROSS_AGENT_PROTOCOL.md`
5. Save the project

**Test it:** "KIM LIST" → should show the index (empty at first)

---

### Step 3: Create the Thomas Project

1. Go to [claude.ai/projects](https://claude.ai/projects) → **New Project**
2. Name it: `Thomas — Personal Teaching Agent`
3. **Project Instructions** — paste the full content of:
   `https://github.com/gotsetthawut/thomas-agent/blob/main/agents/THOMAS_AGENT.md`
4. **Project Knowledge** — upload these files from the Thomas repo:
   - `frameworks/FEYNMAN_TECHNIQUE.md`
   - `frameworks/SOCRATIC_METHOD.md`
   - `frameworks/SPACED_REPETITION.md`
   - `templates/LESSON_NOTE_TEMPLATE.md`
   - `docs/KIM_INTEGRATION.md`
   - `docs/CROSS_AGENT_PROTOCOL.md`
5. Save the project

**Test it:** "Teach me how neural networks work — I am a complete beginner."

---

### Step 4: Create the Atlas Project (Placeholder)

1. Go to [claude.ai/projects](https://claude.ai/projects) → **New Project**
2. Name it: `Atlas — Coming Soon`
3. **Project Instructions:** "You are Atlas, an AI agent under development. You are part of the gotsetthawut AI Agent ecosystem alongside BIVA, KIM, and Thomas. Your role is being defined. For now, respond helpfully and note that Atlas is coming soon."
4. Save the project

---

## Part 2: Setting Up Cowork Skills

Cowork lets you run all agents in a single session. Install each as a `.skill` file.

---

### Step 1: Package the Skills

Clone each repo and run the packaging script:

**KIM:**
```
git clone https://github.com/gotsetthawut/kim-agent
cd kim-agent
create-kim-skill.bat
```
→ Creates `kim.skill` in the parent folder

**Thomas:**
```
git clone https://github.com/gotsetthawut/thomas-agent
cd thomas-agent
create-thomas-skill.bat
```
→ Creates `thomas.skill` in the parent folder

**BIVA:**
```
git clone https://github.com/gotsetthawut/BIVA
cd BIVA
create-biva-skill.bat
```
→ Creates `biva.skill` in the parent folder

---

### Step 2: Install Skills in Cowork

1. Open Claude Cowork
2. Drag `kim.skill` into the chat → click **Save skill**
3. Drag `thomas.skill` into the chat → click **Save skill**
4. Drag `biva.skill` into the chat → click **Save skill**

All three agents are now available in every Cowork session.

---

### Step 3: Start a Cowork Session

Open a new Cowork session and begin with:
```
KIM LIST
```
This shows everything already in your vault.

Then use agents with their trigger phrases:
- `"teach me X"` — Thomas activates
- `"validate this idea: X"` — BIVA activates
- `"remember this / what do we know about X"` — KIM activates

---

## Part 3: Daily Workflow

### Scenario A: Learning + Storing

1. Open **Thomas Chat Project**
2. Say: "Teach me how compound interest works"
3. Thomas delivers the lesson
4. Thomas outputs: `KIM STORE: [lesson note]`
5. Copy that block → open **KIM Chat Project** → paste it
6. KIM confirms it is stored
7. Next time: ask KIM "what do we know about compound interest" from any agent

---

### Scenario B: Idea Validation + Storing

1. Open **BIVA Chat Project**
2. Say: "Validate this idea: a habit-tracking app for remote teams"
3. BIVA runs the full validation workflow
4. BIVA outputs: `KIM STORE: [decision log]`
5. Copy → paste into **KIM Chat Project**
6. Stored permanently

---

### Scenario C: Cross-Agent Cowork Session

1. Open **Cowork** with all skills loaded
2. `"KIM LIST"` — review what you know
3. `"Teach me about market sizing"` — Thomas teaches it
4. `"KIM STORE: [Thomas output]"` — KIM stores the lesson
5. `"Validate this idea: a market research tool for indie founders"` — BIVA validates
6. `"KIM STORE: [BIVA output]"` — KIM stores the decision
7. `"KIM DIGEST: market sizing + market research"` — KIM synthesizes everything

---

## Part 4: Quick Reference

### Agent Trigger Phrases

| Agent | Trigger | Action |
|-------|---------|--------|
| Thomas | "teach me X" | Lesson |
| Thomas | "research X from scratch" | Research report |
| Thomas | "build me a learning path for X" | Learning path |
| BIVA | "validate this idea: X" | Full validation |
| BIVA | "run idea intake for X" | Idea intake record |
| KIM | "remember this / save this" | Store to vault |
| KIM | "what do we know about X" | Retrieve |
| KIM | "KIM LIST" | Show all vault entries |
| KIM | "KIM DIGEST: X" | Synthesize on topic |

### Agent Repos

| Agent | Repo | System Prompt File |
|-------|------|--------------------|
| BIVA | gotsetthawut/BIVA | agents/BIVA_AGENT.md |
| KIM | gotsetthawut/kim-agent | SKILL.md |
| Thomas | gotsetthawut/thomas-agent | agents/THOMAS_AGENT.md |
| Atlas | gotsetthawut/atlas-agent | Coming soon |

---

## Part 5: How KIM Connects Everything

KIM uses this YAML frontmatter format. Every agent produces documents in this format:

```yaml
---
title: [PREFIX-NNNN]: [Title]
tags: [agent-source, topic, type]
source: agent:[thomas|biva|atlas]
created: YYYY-MM-DD
updated: YYYY-MM-DD
summary: One-line summary visible in KIM index.
---
```

Over time, KIM becomes a complete record of:
- Every lesson Thomas has ever taught you
- Every business idea BIVA has ever evaluated
- Every piece of research compiled from scratch
- Every decision made with rationale

This is your **personal AI knowledge base** — it grows with every session.