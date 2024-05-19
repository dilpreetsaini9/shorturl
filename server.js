import express from "express";

import { listenString, port } from "./functions/basicFunctions.js";
import path from "path";
import router from "./routes/routes.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", router);

app.listen(port(), listenString());
