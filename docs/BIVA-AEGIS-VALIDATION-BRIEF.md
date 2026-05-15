# BIVA Validation Brief: Aegis Agent

Use this as a paste-ready prompt for BIVA.

---

## Paste Into BIVA

```text
Validate this agent idea using the BIVA validation process.

Agent idea:
Aegis is an elite AI Software Engineering Manager and Principal Engineer. It is
intended to operate as a senior software engineer, engineering manager,
technical architect, QA reviewer, DevOps strategist, security reviewer, product
thinker, engineering mentor, and AI team supervisor.

Problem statement:
The user wants to build scalable software projects, AI-powered products,
automation systems, and agent ecosystems. They need an AI agent that can think
like a technical lead or startup CTO, not just a coding assistant. The agent
should plan, architect, execute, review, validate, document, improve, supervise,
and scale systems while balancing business value, engineering quality,
development speed, security, maintainability, scalability, and cost efficiency.

Target user:
- Solo founder or builder using AI agents
- Technical operator managing multiple repos and agent workflows
- Non-enterprise user who still wants strong engineering discipline
- Future small team that may use AI agents as engineering collaborators

Proposed role:
Aegis is the engineering leadership agent. It should handle technical planning,
architecture, code review, implementation strategy, QA thinking, DevOps
planning, security review, documentation standards, project supervision, and
engineering mentoring.

Differentiation from existing agents:
- Atlas maps projects, phases, dependencies, decisions, and agent handoffs.
- BIVA validates business ideas and returns GO / REVISE / HOLD / NO-GO.
- KIM stores and retrieves durable shared knowledge.
- Thomas teaches, researches, and creates learning paths.
- Aegis would focus on engineering leadership and software delivery quality.

Key risk:
Aegis may overlap with Codex itself or become too broad. It may need a tightly
scoped v0.1 role before it deserves a dedicated repo.

Validation request:
Evaluate whether Aegis should become a separate agent in the AI-Agent ecosystem.

Please provide:
1. Decision: GO, REVISE, HOLD, or NO-GO
2. One-sentence verdict
3. Value hypothesis
4. Target user clarity
5. Differentiation from Atlas, BIVA, KIM, and Thomas
6. Biggest risks
7. Scope creep warnings
8. Recommended v0.1 scope
9. Whether Aegis deserves its own repo
10. Next action
11. KIM STORE block for the decision
```

---

## Expected BIVA Output

BIVA should return a structured validation decision.

The decision should be one of:

```text
GO
REVISE
HOLD
NO-GO
```

The most useful output will include:

- Clear verdict
- Differentiation analysis
- Risks and overlap concerns
- Recommended v0.1 scope
- Decision on whether to create an `aegis-agent` repo
- KIM-ready decision log

---

## How to Use the Result

If BIVA returns `GO`:

- Create an `aegis-agent` repo.
- Move the Aegis prompt from KIM reference into the Aegis repo.
- Define Aegis v0.1 scope tightly.

If BIVA returns `REVISE`:

- Update the Aegis role and reduce scope.
- Run BIVA validation again.

If BIVA returns `HOLD`:

- Store the idea in KIM.
- Revisit after Atlas is more mature.

If BIVA returns `NO-GO`:

- Do not create Aegis as a separate repo.
- Keep the prompt as a reference only.

