# Atlas and Aegis Role Decision

**Status:** Draft decision for validation
**Date:** 2026-05-16
**Decision owner:** gotsetthawut

---

## Decision

Atlas and Aegis should be treated as separate agent concepts.

Atlas remains the **Project Cartographer**.

Aegis becomes a **future Engineering Lead Agent candidate** that must be
validated by BIVA before a dedicated Aegis repo is created.

---

## Role Boundaries

| Agent | Role | Status |
|-------|------|--------|
| Atlas | Maps goals, phases, dependencies, decisions, and agent handoffs | Draft in `atlas-agent` |
| Aegis | Elite software engineering manager, principal engineer, technical architect, QA reviewer, DevOps strategist, security reviewer, product thinker, and AI team supervisor | Candidate only |
| BIVA | Validates whether Aegis has clear value, differentiation, risks, and next steps | Validation tool |
| KIM | Stores the Aegis prompt as a reusable shared reference | Memory layer |

---

## Why Atlas Should Not Become Aegis

Atlas already has a useful and distinct role: helping the user see the map of a
project.

If Atlas also becomes a full engineering executive agent, its role becomes too
broad. That creates overlap with:

- BIVA for business validation
- Thomas for teaching and research
- KIM for memory
- future engineering execution agents

Keeping Atlas focused makes it easier to understand when to use Atlas.

---

## Aegis Candidate Role

Aegis is a possible new agent for technical leadership and engineering
execution.

Candidate mission:

```text
Aegis operates as an elite AI software engineering manager and principal
engineer. It plans, architects, reviews, validates, documents, supervises, and
scales software systems while balancing business value, engineering quality,
speed, security, maintainability, and cost.
```

---

## Validation Requirement

Before creating an Aegis repo, BIVA should validate whether Aegis is worth
building as a separate agent.

BIVA should evaluate:

- Business and user value
- Differentiation from Atlas, BIVA, KIM, and Thomas
- Risk of scope creep
- Risk of overlapping with Codex itself
- Required first version scope
- Whether Aegis deserves a separate repo

The requested BIVA decision should be one of:

```text
GO
REVISE
HOLD
NO-GO
```

---

## KIM Storage Decision

The Aegis prompt should be stored in KIM as a shared reference, not as the
canonical Atlas prompt.

KIM title:

```text
REF-0001: Aegis Engineering Lead Agent Prompt Draft
```

Tags:

```text
agent:aegis, agent-draft, engineering-lead, atlas-boundary
```

---

## Implementation Rules

- Do not rename Atlas to Aegis.
- Do not overwrite `atlas-agent/agents/ATLAS_AGENT.md` with the Aegis prompt.
- Keep Atlas focused on project mapping and navigation.
- Keep Aegis as a candidate until BIVA validates it.
- Do not create an Aegis repo until BIVA returns a decision and the user approves.

