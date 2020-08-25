export const getIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shuffle = arr => {
  return arr.sort(() => 0.5 - Math.random());
};
