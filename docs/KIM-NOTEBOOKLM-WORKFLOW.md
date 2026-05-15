# KIM and NotebookLM Workflow

NotebookLM should be used as the reading and synthesis layer for KIM.

KIM remains the durable library. NotebookLM becomes the research room where
KIM sources are studied, questioned, summarized, and turned into useful outputs.

---

## Core Principle

```text
KIM = permanent source of truth
NotebookLM = source-grounded research and synthesis interface
```

Do not treat NotebookLM as the only memory system. Anything important produced
inside NotebookLM should be copied back into KIM.

---

## Recommended NotebookLM Notebooks

| Notebook | Purpose |
|----------|---------|
| KIM - AI Agent Ecosystem | Whole ecosystem overview, roles, workflows, repo structure |
| KIM - Atlas and Aegis | Atlas role, Aegis candidate, BIVA validation, execution planning |
| KIM - BIVA Decisions | Business validation records and decision logs |
| KIM - Thomas Learning Materials | Lessons, research notes, study guides, learning paths |
| KIM - Technical Architecture | Engineering architecture, DevOps, security, implementation decisions |
| KIM - Future Design Team | UX, UI, design systems, brand, design research, prototypes |

---

## First Notebook to Create

Create this NotebookLM notebook first:

```text
KIM - AI Agent Ecosystem
```

Use it to understand the whole system before splitting into specialized
notebooks.

Recommended first sources:

- `README.md`
- `ECOSYSTEM.md`
- `docs/AI-AGENT-MANUAL.md`
- `docs/AI-AGENT-WORKFLOW.md`
- `docs/ATLAS-PROJECT-SPACE.md`
- `docs/ATLAS-AEGIS-ROLE-DECISION.md`
- `docs/BIVA-AEGIS-VALIDATION-BRIEF.md`
- `docs/KIM-STORE-AEGIS-PROMPT.md`
- `docs/REPOSITORY-STRUCTURE-REVIEW.md`

---

## Operating Loop

```text
1. Create or update documents in GitHub / KIM
2. Add those sources to NotebookLM
3. Ask NotebookLM questions over the sources
4. Convert useful answers into KIM STORE notes
5. Save those notes back to KIM
6. Agents retrieve from KIM for future work
```

---

## What Goes Where

| Artifact | Store in KIM/GitHub | Use in NotebookLM |
|----------|---------------------|-------------------|
| Agent prompts | Yes | Yes, for analysis |
| Decision logs | Yes | Yes, for synthesis |
| Research reports | Yes | Yes, for Q&A |
| Lessons | Yes | Yes, for study |
| Temporary discussion | No, unless useful | Optional |
| NotebookLM answers | Only if useful | Generated there |
| Final summaries | Yes | Yes |

---

## Save Back to KIM

When NotebookLM creates a useful summary, copy it into KIM using this pattern:

```text
KIM STORE:
---
title: REF-0002: NotebookLM Summary of [Topic]
tags: [notebooklm, kim, summary, topic]
source: notebooklm
created: YYYY-MM-DD
updated: YYYY-MM-DD
summary: One-line summary of the NotebookLM output.
---

[Paste useful NotebookLM output here]
```

---

## Safety Rules

- Do not rely on NotebookLM alone for permanent storage.
- Keep canonical docs in GitHub or KIM.
- Keep notebooks focused by topic.
- Copy useful NotebookLM outputs back into KIM.
- If NotebookLM reveals contradictions, update the source documents.
- If an agent decision matters, store the final decision in KIM.

