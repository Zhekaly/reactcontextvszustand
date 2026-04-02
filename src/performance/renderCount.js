export let storedRenderCounts = {};

export const resetLogs = () => {
  Object.keys(storedRenderCounts).forEach(module => {
    Object.keys(storedRenderCounts[module]).forEach(name => {
      storedRenderCounts[module][name] = { triggered: 0, finished: 0 };
    });
  });
};