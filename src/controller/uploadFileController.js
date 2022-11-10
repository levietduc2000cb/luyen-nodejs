export const uploadFileImagePage = async (req, res, next) => {
  res.render("./uploadImage/index.ejs");
};

export const uploadSingleFileImage = async (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  console.log(file);
  let imageFiles = [`/imageUpload/${file.filename}`];
  res.render("./displayUploadFile/index.ejs", { imageFiles });
};

export const uploadMultipleFileImage = async (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  let imageFiles = files.map((file, index) => {
    return `/imageUpload/${file.filename}`;
  });
  res.render("./displayUploadFile/index.ejs", { imageFiles });
};
