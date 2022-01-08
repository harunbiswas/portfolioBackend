const uploader = require("../../utilities/singleUploder");

function photoUpload(req, res, next) {
  if (req.body.file && req.body.file.length > 0) {
    const upload = uploader(
      "photo",
      ["image/jpeg", "image/jpg", "image/png"],
      10000000,
      "Onlu .jpeg, .jpg & .png format allowed and max size is 10 MB"
    );

    // call the middleware function
    upload.any()(req, res, (err) => {
      if (err) {
        res.status(500).json({
          errors: {
            photo: {
              msg: err.message,
            },
          },
        });
      } else {
        next();
      }
    });
  }
}

module.exports = photoUpload;
