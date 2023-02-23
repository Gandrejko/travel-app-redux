const symbols = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

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
