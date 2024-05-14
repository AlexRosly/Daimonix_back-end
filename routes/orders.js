const express = require("express");
const { order: ctrl } = require("../controllers");
const { ctrlWrapper, validation } = require("../middelwares");
const router = express.Router();

//get new order
router.get("/get-new-order", ctrlWrapper(ctrl.getNewOrder));

//get close order
// router.get("/get-new-order", ctrlWrapper(ctrl.getNewOrder));

//create order
router.post("/add-order", ctrlWrapper(ctrl.createOrder));

//confirm order
router.patch("/finish-to-processing", ctrlWrapper(ctrl.confirmOrder));

//confirm order

module.exports = router;
