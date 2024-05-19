import {
  ensureHttpOrHttps,
  generateShortURL,
} from "../functions/basicFunctions.js";
import { state, createId } from "../state/index.js";

function createShortUrl(req, res) {
  if (!req.body.url) {
    return res.json({ error: "bad request" });
  }
  let shortUrl = generateShortURL(8);
  state.push({
    id: createId(),
    url: ensureHttpOrHttps(req.body.url),
    shorturl: shortUrl,
    clicks: 0,
  });
  res.json({ url: shortUrl });
}

function stateData(req, res) {
  res.send(state);
}

function redirectService(req, res) {
  const shortUrl = req.params.shorturl;
  const findshortUrl = state.find((item) => item.shorturl === shortUrl);

  if (findshortUrl) {
    findshortUrl.clicks += 1;
    res.redirect(findshortUrl.url);
  } else {
    res.status(404).send("URL not found");
  }
}

export { createShortUrl, stateData, redirectService };
