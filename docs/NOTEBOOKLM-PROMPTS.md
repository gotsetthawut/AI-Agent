# NotebookLM Prompts

Use these prompts inside NotebookLM after adding the KIM source pack.

---

## Ecosystem Understanding

```text
Based only on the sources, explain the AI-Agent ecosystem in beginner-friendly terms.
Describe each agent's role, what it should produce, and how KIM connects them.
```

```text
Create a one-page operating manual for the AI-Agent ecosystem.
Separate research, validation, library, planning, execution, and future design work.
```

---

## Boundary Review

```text
Find any overlap or contradiction between BIVA, KIM, Thomas, Atlas, and Aegis.
For each issue, explain the risk and recommend a cleaner boundary.
```

```text
Should Atlas and Aegis remain separate agents based on the sources?
Give a structured answer with reasons, risks, and a recommended next step.
```

---

## KIM Library Design

```text
Design a practical KIM library structure based on these sources.
Include folders, document types, naming conventions, and when to store outputs.
```

```text
What should be saved back to KIM from NotebookLM?
Create rules for deciding what is temporary versus what becomes permanent memory.
```

---

## BIVA and Aegis Validation

```text
Review the Aegis validation brief.
What would BIVA likely identify as the strongest value, biggest risk, and best v0.1 scope?
```

```text
Create a tighter BIVA validation prompt for Aegis that avoids scope creep and focuses on whether Aegis deserves its own repo.
```

---

## Atlas Planning

```text
Define Atlas as Project Cartographer using only the source documents.
List what Atlas should do, should not do, and what outputs Atlas should produce.
```

```text
Create a first Atlas workflow for turning a validated idea into a project roadmap.
Include where KIM, BIVA, Thomas, Aegis, and future design agents participate.
```

---

## Future Design Team

```text
Based on the current ecosystem, propose future design team agents.
For each agent, define role, outputs, and how it should use KIM.
```

---

## Save Back to KIM

```text
Convert your answer into a KIM STORE note with YAML frontmatter.
Use a clear title, tags, source:notebooklm, date fields, summary, and the final content.
```

