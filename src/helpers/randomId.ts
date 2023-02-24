const symbols = "0123456789abcdefghijklmnopqrstuvwxyz";

const rs = () => {
  // return random symbol
  const randomIndex = Math.floor(
    (new Date().getTime() % symbols.length) * Math.random()
  );
  return symbols[randomIndex];
};
const rfs = () => {
  // return four random symbol
  return `${rs()}${rs()}${rs()}${rs()}`;
};
export const randomId = () => {
  // return random id
  return `${rfs()}${rfs()}-${rfs()}-${rfs()}-${rfs()}${rfs()}${rfs()}`;
};
