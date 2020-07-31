import data from "../../data/quotes.json";
import { shuffle } from "../../helpers/general";

export default (req, res) => {
  const num = req.query.num || 10; 
  const quotes = shuffle(data.quotes).slice(0, Math.min(num, 100))
  res.status(200).json(quotes);
};
