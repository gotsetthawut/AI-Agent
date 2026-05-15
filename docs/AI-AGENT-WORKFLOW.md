# AI-Agent Workflow

This document defines the working flow between BIVA, Thomas, KIM, Atlas, Aegis,
and future specialist teams.

---

## Core Workflow

The AI-Agent ecosystem should operate as a loop:

```text
Brainstorm / Research / Validate
  -> Keep / Library
  -> Plan / Execute
  -> Store results back into Library
```

KIM is the library layer. All useful outputs should eventually return to KIM so
future agents can reuse them.

---

## Agent Layers

| Layer | Agents | Purpose |
|-------|--------|---------|
| Brainstorm / Research / Validation | BIVA, Thomas | Explore ideas, validate business value, create learning material |
| Keep / Library | KIM | Store, retrieve, summarize, and preserve shared knowledge |
| Planning / Execution | Atlas, Aegis candidate, future execution agents | Turn validated knowledge into project maps, architecture, implementation, and delivery |
| Future Design Team | TBD | Product design, UX, UI systems, brand, visual design, prototypes |

---

## Flow 1: Business Idea or Product Direction

Use this when the user has an idea and needs to know if it is worth building.

```text
User idea
  -> BIVA brainstorms, researches, and validates
  -> BIVA returns GO / REVISE / HOLD / NO-GO
  -> KIM stores the decision and reasoning
  -> Atlas maps the project if it is worth pursuing
  -> Aegis or execution team builds the technical plan
  -> KIM stores final decisions, architecture, and lessons
```

Use BIVA for:

- Idea intake
- Business validation
- Feasibility checks
- Evidence scoring
- Decision logs

Use KIM after BIVA to store:

- Validation decisions
- Market assumptions
- Risks
- User insights
- Next actions

---

## Flow 2: Research or Learning Material

Use this when the user needs to understand a topic before deciding or building.

```text
Learning need
  -> Thomas researches or teaches
  -> Thomas creates learning material
  -> KIM stores the lesson or research note
  -> BIVA, Atlas, Aegis, or future teams retrieve it later
```

Use Thomas for:

- Teaching
- Research from scratch
- Learning paths
- Study guides
- Beginner-friendly explanations

Use KIM after Thomas to store:

- Lesson notes
- Research reports
- Study guides
- Learning paths
- Important definitions

---

## Flow 3: Library to Execution

Use this when KIM already contains useful knowledge and the user wants to act.

```text
KIM retrieves stored knowledge
  -> Atlas maps goals, phases, dependencies, and decisions
  -> Aegis candidate or execution team creates engineering plan
  -> Future design team creates design direction when needed
  -> Work is implemented
  -> KIM stores final results and lessons learned
```

KIM should feed:

- BIVA when old decisions or market assumptions matter
- Thomas when old lessons should be extended
- Atlas when a project map needs prior context
- Aegis or execution agents when architecture and implementation need prior context
- Future design agents when product/design decisions need prior context

---

## Atlas Role in This Workflow

Atlas is the project cartographer.

Atlas should answer:

- What are we trying to build?
- What phase are we in?
- What decisions are missing?
- What depends on what?
- Which agent should help next?
- What should be stored in KIM?

Atlas does not replace BIVA, Thomas, KIM, or Aegis.

---

## Aegis Role in This Workflow

Aegis is a candidate future engineering lead agent.

If BIVA validates Aegis, Aegis should handle:

- Engineering architecture
- Technical planning
- Code review
- DevOps strategy
- Security review
- QA strategy
- Engineering team supervision

Aegis should not be created as a live agent until BIVA validates the idea and
the user approves creating an Aegis repo.

---

## Future Design Team

The design team is planned for later.

Possible roles:

- UX researcher
- Product designer
- UI designer
- Design system agent
- Brand agent
- Prototype agent

Future design agents should also use KIM as the shared library.

```text
KIM context
  -> Design team creates UX/UI/design system work
  -> Atlas coordinates with project map
  -> Aegis coordinates with implementation constraints
  -> KIM stores design decisions and reusable design knowledge
```

---

## Simple Operating Rule

When unsure where work belongs, use this rule:

```text
Need to validate business value? Use BIVA.
Need to learn or research? Use Thomas.
Need to remember or retrieve? Use KIM.
Need to map the project? Use Atlas.
Need to engineer and execute? Use Aegis or execution team, after validation.
Need design? Use future design team.
```

