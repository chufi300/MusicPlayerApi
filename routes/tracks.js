const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");

router
  .get("/", getItems)
  .get("/:id", validatorGetItem, getItem)
  .post("/", validatorCreateItem, createItem)
  .put("/:id", validatorGetItem, validatorCreateItem, updateItem)
  .delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
