export const stringifyDate = (date: Date) => {
  return JSON.stringify(date).slice(1, -1);
};
