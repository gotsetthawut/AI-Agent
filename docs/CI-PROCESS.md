# AI-Agent CI Process Manual

This manual explains how to use GitHub, branches, pull requests, CI, releases,
and automation for the AI-Agent workspace.

---

## Core Idea

GitHub is the shared source of truth.

Local machines, Codex, Claude, and other tools work from local clones. Changes
are committed locally, pushed to GitHub, reviewed through pull requests, checked
by CI, then merged into `main` when ready.

```text
GitHub repo
  -> clone or pull to local
  -> edit on branch
  -> commit
  -> push branch
  -> open pull request
  -> CI checks run
  -> merge into main
  -> other locals pull the update
```

---

## Key Terms

| Term | Meaning |
|------|---------|
| Repository | The project stored on GitHub and cloned locally |
| Clone | A full local copy of the GitHub repository |
| Pull | Download the latest GitHub changes into the local clone |
| Branch | A separate workspace for changes before they enter `main` |
| Commit | A saved snapshot of local changes |
| Push | Upload local commits to GitHub |
| Pull Request | A request to merge one branch into another |
| Merge | Bring branch changes into `main` |
| CI | Continuous Integration, automatic checks triggered by code changes |
| Release | A named version with notes, usually attached to a Git tag |

---

## Standard Workflow

### 1. Start From Main

Use this when beginning new work.

```bash
git checkout main
git pull
```

This makes sure the local `main` branch matches GitHub before creating a new
branch.

### 2. Create a Work Branch

```bash
git checkout -b ai-agent-workflow
```

Use a branch name that describes the work.

Examples:

```text
ai-agent-workflow
add-ci-manual
update-kim-integration
define-atlas-agent
```

### 3. Edit Files Locally

Make changes in the cloned repository. Codex, Claude, and the user can all help
edit the files.

For this repository, common places to edit are:

```text
README.md
ECOSYSTEM.md
docs/
update-all-skills.bat
```

### 4. Check Local Changes

```bash
git status
git diff
```

Use `git status` to see changed files. Use `git diff` to inspect exactly what
changed before saving the work.

### 5. Commit Changes

```bash
git add .
git commit -m "Add CI process manual"
```

A good commit message is short and explains the result of the change.

### 6. Push the Branch

```bash
git push -u origin ai-agent-workflow
```

After the first push, later pushes can usually be:

```bash
git push
```

### 7. Open a Pull Request

Open a pull request from the work branch into `main`.

```text
ai-agent-workflow -> main
```

The pull request is where changes are reviewed before becoming official.

### 8. Wait for CI

CI stands for Continuous Integration.

CI can automatically:

- Check formatting
- Run tests
- Validate Markdown
- Build docs
- Check links
- Deploy a preview
- Notify another system

For this AI-Agent repository, a good first CI setup would be:

- Markdown lint
- Link check
- Script syntax check for `.bat` files

### 9. Merge When Ready

Merge the pull request when:

- The change does what it should do
- The files changed are reviewed
- CI checks pass
- GitHub says there are no merge conflicts
- The branch is ready to become part of `main`

After merging, `main` becomes the official updated version.

### 10. Pull After Merge

Any local clone should pull the latest `main`.

```bash
git checkout main
git pull
```

---

## When to Pull

Pull from GitHub:

- Before starting work
- Before creating a new branch
- Before pushing if other people or tools may have changed the repo
- After another local machine pushed changes
- After a pull request was merged
- Before running update scripts that depend on latest files

Mental model:

```text
pull = GitHub -> local
push = local -> GitHub
```

---

## When to Open a Pull Request

Open a pull request when the branch has a meaningful set of changes to review.

Good times:

- A manual or guide was added
- An agent role was updated
- A workflow was changed
- A script was modified
- A new agent structure was introduced

Avoid opening a pull request when:

- The branch has no changes
- The work is still only notes with no decision
- The change is known to be broken
- The branch includes unrelated experiments

---

## When to Merge

Merge when the work is ready to become official.

Checklist:

- [ ] Purpose is clear
- [ ] Files changed are expected
- [ ] CI checks pass or failures are understood
- [ ] No merge conflicts
- [ ] Pull request description explains what changed
- [ ] `main` should now include this work

If any item is unclear, keep the pull request open and continue editing the
branch.

---

## Releases

A release is a named version of the project.

Examples:

```text
v0.1.0 - First AI-Agent workspace
v0.2.0 - Add CI process and manual structure
v1.0.0 - Stable AI-Agent operating system
```

Releases usually include update notes:

- What changed
- Why it matters
- Any setup steps
- Any known issues

Basic release commands:

```bash
git checkout main
git pull
git tag v0.2.0
git push origin v0.2.0
```

Then create the release notes on GitHub under:

```text
https://github.com/gotsetthawut/AI-Agent/releases
```

---

## Automation Ideas

GitHub updates can trigger useful automation through GitHub Actions.

Examples:

| Trigger | Possible Automation |
|---------|---------------------|
| Push to `main` | Run Markdown checks |
| Pull request opened | Run CI and show pass/fail result |
| Release created | Package `.skill` files as release assets |
| Docs changed | Notify that Claude Project instructions may need updating |
| Agent repo changed | Rebuild or republish related skill file |

Possible future AI-Agent automation:

```text
Push to main
  -> validate docs
  -> check links
  -> rebuild skills
  -> create release draft
  -> notify user
```

---

## Recommended AI-Agent Branch Policy

Use `main` as the stable branch.

Use work branches for changes:

```text
main
  <- ai-agent-workflow
  <- add-ci-manual
  <- define-atlas-agent
  <- update-cowork-skills
```

Rules:

- Do not experiment directly on `main`
- Keep one branch focused on one purpose
- Pull before starting work
- Commit with clear messages
- Open a pull request before merging
- Merge only when the branch is reviewed and ready

---

## Quick Command Reference

```bash
# Check current branch and local changes
git status

# Update local main
git checkout main
git pull

# Create a branch
git checkout -b branch-name

# Save changes
git add .
git commit -m "Describe the change"

# Push branch to GitHub
git push -u origin branch-name

# Pull merged updates later
git checkout main
git pull
```
