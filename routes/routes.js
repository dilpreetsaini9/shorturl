import express from "express";
import {
  createShortUrl,
  redirectService,
  stateData,
} from "../controllers/controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
555555;
router.get("/data", stateData);
router.get("/:shorturl", redirectService);
router.post("/createurl", express.json(), createShortUrl);

export default router;
