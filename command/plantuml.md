---
description: Generate a PlantUML diagram from a prompt
---

Generates a PlantUML diagram based on the provided description, saves it to `imgs/`, and provides the raw text and image path.

## Usage

```
/plantuml <description>
```

The prompt is: $ARGUMENTS

## Step 1: Environment Check

Check if `plantuml` is installed and ensure the output directory exists.

```bash
if ! command -v plantuml &> /dev/null; then
    echo "Error: plantuml is not installed. Please install it to use this command."
    exit 1
fi
mkdir -p imgs
```

## Step 2: Generate and Render

1.  **Analyze** the user's request: "$ARGUMENTS".
2.  **Generate** the PlantUML code. It must start with `@startuml` and end with `@enduml`.
3.  **Save** the code to a file with a timestamp.
    *   Example filename: `imgs/plantuml-17156234.puml`
4.  **Render** the image using the `plantuml` command.
    *   Command: `plantuml imgs/plantuml-17156234.puml` (This will create `imgs/plantuml-17156234.png`)

## Step 3: Output

Present the result to the user:
1.  Display the **Raw PlantUML Text** in a code block.
2.  Provide the **Image Path** so the user can copy it.

Example Output:

```plantuml
@startuml
...
@enduml
```

**Image generated at:** `imgs/plantuml-17156234.png`
