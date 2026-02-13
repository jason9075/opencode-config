import fs from 'fs';

export const NixDevelopPlugin = async ({ directory, client }) => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool === "bash") {
        const flakePath = `${directory}/flake.nix`;
        
        if (fs.existsSync(flakePath)) {
          const originalCommand = output.args.command;
          if (!originalCommand.includes("nix develop")) {
            output.args.command = `nix develop --command ${originalCommand}`;
          }
        }
      }
    },
  };
};
