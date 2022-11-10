import express from "express";

import {
  getHomePage,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controller/homeController";
import { getAboutPage } from "../controller/aboutController";
import {
  uploadFileImagePage,
  uploadSingleFileImage,
  uploadMultipleFileImage,
} from "../controller/uploadFileController.js";
import upload from "../util/uploadImageFolder";
let router = express.Router();

const initWebRoute = app => {
  router.post("/user-ready-edit/:id", getUser);
  router.get("/home", getHomePage);
  router.post("/edit-user", updateUser);
  router.post("/create-new-user", createNewUser);
  router.post("/delete-user", deleteUser);
  router.get("/about/:id", getAboutPage);
  router.get("/upload-image-page", uploadFileImagePage);
  router.post(
    "/single-upload-file",
    upload.single("myFile"),
    uploadSingleFileImage
  );
  router.post(
    "/multiple-upload-file",
    upload.array("myFile", 12),
    uploadMultipleFileImage
  );

  return app.use("/", router);
};

export default initWebRoute;
