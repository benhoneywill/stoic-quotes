import Cors from "cors";

import data from "../../data/quotes.json";
import { getIntBetween } from "../../helpers/general";
import { initMiddleware } from "../../helpers/middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"]
  })
);

export default async (req, res) => {
  await cors(req, res);
  const randomNum = getIntBetween(0, data.quotes.length - 1);
  res.status(200).json(data.quotes[randomNum]);
};
