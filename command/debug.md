---
description: Investigate an error - gather context, trace cause, suggest fix
---

Debug mode. Given an error message, stack trace, or description, investigate and find the cause.

## Usage

```
/debug <error_payload> [--save]
```

The error/context is: $ARGUMENTS

## Step 1: Check Known Patterns FIRST

Check the local knowledge base for recurring architectural smells or known fixes.
```bash
# Use project-root relative path or environment variable
KB_PATH="${DEBUG_KB_DIR:-.github/knowledge}/error-patterns.md"
if [ -f "$KB_PATH" ]; then
  rg -i "$ARGUMENTS" "$KB_PATH" -B 2 -A 10 || echo "No known patterns found."
fi
```


## Step 2: Adaptive Context Gathering

Analyze the $ARGUMENTS. - If a stack trace exists, automatically read the top 3 relevant files.
- If it's a Nix/Build error, check flake.nix or default.nix.
- If it's a Type error, run pnpm tsc --noEmit on the specific file.

```
# Example: Smart find (AI should decide which one to run)
fd -t f ".ts$" | xargs rg -l "ErrorSignature"
```

## Step 3: Git & Environment "Crime Scene" Investigation

```bash
# Target changes in the last 48 hours for the affected directory
git log --since="48 hours ago" --patch -- "${AFFECTED_DIR:-.}"
```

## Step 4: Logic Tracing (The "Why")


Instead of just finding the line, trace the Data Flow:
1. Source: Where is this variable initialized? (e.g., API response, Props, Env)
2. Sink: Where does it crash?
3. Transformation: What happened in between?

## Step 5: Final Report Structure

Produce a concise report focusing on the Leaky Abstraction or Root Cause.

| Field | Content |
| :--- | :--- |
| **Symptom** | Brief summary of the failure |
| **Root Cause** | The underlying logic flaw (not just the error msg) |
| **Evidence** | Code snippet + Stack trace reference |
| **Resolution** | Clean code fix (DRY/SOLID principles) |
| **Nix/Env Check** | (Optional) Any missing devShell dependencies? |


