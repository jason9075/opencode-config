export const NotificationPlugin = async ({ project, client, $, directory, worktree }) => {
  let totalDuration = 0;
  let lastUpdateTime = null;

  const formatDuration = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
    return `${seconds}s`;
  };

  return {
    event: async ({ event }) => {
      if (event.type === "message.part.updated") {
        const now = Date.now();
        
        if (lastUpdateTime) {
          totalDuration += (now - lastUpdateTime);
        }
        
        lastUpdateTime = now;
      }

      // Send notification on session completion
      if (event.type === "session.idle") {
        if (totalDuration > 1) {
          const durationStr = formatDuration(totalDuration);
          const projectName = directory.split('/').pop();

          await $`notify-send "Opencode" "Session completed! (${projectName})\nTime: ${durationStr}" -i utilities-terminal`

          totalDuration = 0;
          lastUpdateTime = null;
        }
      }

    },
  }
}
