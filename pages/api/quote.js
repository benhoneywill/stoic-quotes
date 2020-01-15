import data from "../../data/quotes.json";
import { getIntBetween } from "../../helpers/general";

export default (req, res) => {
  const randomNum = getIntBetween(0, data.quotes.length - 1);
  res.status(200).json(data.quotes[randomNum]);
};
