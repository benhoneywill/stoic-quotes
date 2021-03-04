import Cors from "cors";

import data from "../../data/quotes.json";
import { shuffle } from "../../helpers/general";
import { initMiddleware } from "../../helpers/middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"]
  })
);

export default async (req, res) => {
  await cors(req, res);

  const { num = 10 } = req.query;
  const count = parseInt(num, 10);

  if (Number.isNaN(count) || count <= 0 || count > 100) {
    return res.status(422).json({ error: "`num` must be an integer from 1 to 100." });
  }

  const quotes = shuffle(data.quotes).slice(0, count);
  return res.status(200).json(quotes);
};
