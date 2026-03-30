import Cors from "cors";
import { track } from "@vercel/analytics/server";

import data from "../../data/quotes.json";
import { getIntBetween } from "../../helpers/general";
import { initMiddleware } from "../../helpers/middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"]
  })
);

export default async function getQuote(req, res) {
  await cors(req, res);

  track("quote_requested");

  const randomNum = getIntBetween(0, data.quotes.length - 1);
  res.status(200).json(data.quotes[randomNum]);
};
