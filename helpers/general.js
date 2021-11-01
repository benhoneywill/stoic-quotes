export const getIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const shuffle = arr => arr.sort(() => 0.5 - Math.random());
