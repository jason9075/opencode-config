# Opencode Configuration

This is a personal configuration repository for [Opencode](https://github.com/jason9075/opencode). It contains custom Agents, Slash Commands, Plugins, and related settings.

## 📋 Directory Structure

- **agent/**: Defines instructions and settings for different Agent roles (e.g., `AGENTS.md`).
- **command/**: Custom Slash Commands (Markdown format).
- **plugins/**: Extension plugins written in JavaScript/TypeScript.

## 🚀 Installation

Please clone this repository to the default Opencode configuration directory `~/.config/opencode`.

### 1. Clone Repository

```bash
git clone https://github.com/jason9075/opencode-config ~/.config/opencode
```

### 2. Environment Setup

Since `antigravity-accounts.json` contains sensitive information (API Keys, Tokens), it is excluded by `.gitignore` by default. Please ensure you create this file locally with the correct settings.

## 🛠️ Development & Contribution

- **Add Plugin**: Create `.js` files in the `plugins/` directory following the Opencode Plugin API.
- **Add Command**: Create Markdown files in the `command/` directory.

## ⚠️ Notes

- Do not commit any files containing API Keys or Tokens.
- Modify `AGENTS.md` to adjust core Agent behaviors and instructions.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
