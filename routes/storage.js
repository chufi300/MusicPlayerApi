const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/storage");

router
  .get("/", getItems)
  .get("/:id", validatorGetItem, getItem)
  .post("/", uploadMiddleware.single("myfile"), createItem)
  .delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
