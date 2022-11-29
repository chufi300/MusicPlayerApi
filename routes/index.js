const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`)); // http://stackover:3000/api/tracks
  }
});

module.exports = router;
