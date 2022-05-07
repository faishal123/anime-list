export const waitProcessWithoutAct = (ms: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, ms));
};
