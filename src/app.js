import express from "express";
import path from "path";

import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//setup View Engine
configViewEngine(app);
//setup Routes
initWebRoute(app);

module.exports = app;
