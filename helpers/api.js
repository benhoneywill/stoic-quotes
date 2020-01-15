import fetch from "isomorphic-fetch";

const url = process.env.NODE_ENV === "production" ? "https://stoic-quotes.now.sh" : "http://localhost:3000";

export const fetchQuote = async () => {
  const res = await fetch(`${url}/api/quote`);
  return res.json();
};
