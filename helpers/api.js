import fetch from "isomorphic-fetch";

const url = process.env.NODE_ENV === "production" ? "https://stoic-quotes.com" : "http://localhost:3000";

export const fetchQuote = async () => {
  const res = await fetch(`${url}/api/quote`);
  return res.json();
};

export const fetchQuotes = async (num = 10) => {
  const res = await fetch(`${url}/api/quotes?num=${num}`);
  return res.json();
};
