export const stringifyDate = (date) => {
  const dateStr = JSON.stringify(date).slice(1, -1);
  return dateStr;
};
