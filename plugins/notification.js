export const NotificationPlugin = async ({ project, client, $, directory, worktree }) => {
  let startTime = Date.now();

  const formatDuration = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
    return `${seconds}s`;
  };

  return {
    event: async ({ event }) => {
      if (event.type === "session.busy") {
        startTime = Date.now();
      }

      // Send notification on session completion
      if (event.type === "session.idle") {
        const duration = Date.now() - startTime;
        const durationStr = formatDuration(duration);
        const projectName = directory.split('/').pop();
        // Linux 通用的通知指令
        await $`notify-send "opencode" "Session completed! (${projectName})\nTime: ${durationStr}" -i utilities-terminal`
      }

      if (event.type === "session.ask") {
        const duration = Date.now() - startTime;
        const durationStr = formatDuration(duration);
        const projectName = directory.split('/').pop();
        await $`notify-send "opencode" "Waiting for user input... (${projectName})\nTime: ${durationStr}" -i dialog-question`
      }
    },
  }
}
