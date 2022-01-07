const uploader = require("../../utilities/singleUploder");

function avatarUpload(req, res, next) {
  if (req.body.files && req.body.files.length > 0) {
    const upload = uploader(
      "avatars",
      ["image/jpeg", "image/jpg", "image/png"],
      1000000,
      "Onlu .jpeg, .jpg & .png format allowed and max size is 1MB"
    );

    // call the middleware function
    upload.any()(req, res, (err) => {
      if (err) {
        res.status(500).json({
          errors: {
            avatar: {
              msg: err.message,
            },
          },
        });
      } else {
        next();
      }
    });
  } else {
    next();
  }
}

module.exports = avatarUpload;
