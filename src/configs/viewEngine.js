import express from "express";
const configViewEngine = app => {
  //set Static file
  app.use(express.static("./src/public"));
  // set Template view Engine
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};
export default configViewEngine;
