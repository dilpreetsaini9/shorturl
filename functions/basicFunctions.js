import "dotenv/config";
import crypto from "crypto";

function generateShortURL(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}
function listenString() {
  console.log("Server running on " + process.env.PORT || 7777);
}
function port() {
  return process.env.PORT || 7777;
}
function ensureHttpOrHttps(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
}
export { listenString, port, ensureHttpOrHttps, generateShortURL };
