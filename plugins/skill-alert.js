export const SkillAlertPlugin = async () => {
  return {
    "tool.execute.before": async (tool, args) => {
      if (tool === "skill") {
        const skillName = (args && args.name) ? args.name : "Unknown Skill";
        
        // Minimalist style: Cyan bold text with a simple icon
        // \x1b[36m = Cyan Foreground
        // \x1b[1m  = Bold
        // \x1b[0m  = Reset
        const style = "\x1b[36m\x1b[1m";
        const reset = "\x1b[0m";
        
        console.log(`${style}⚡ Skill: ${skillName}${reset}`);
      }
    },
  };
};
