const express = require("express");
const { post: ctrl } = require("../controllers");
const { ctrlWrapper, validation, upload } = require("../middelwares");
const router = express.Router();

//get all post
router.get("/get-all", ctrlWrapper(ctrl.getAll));

//create post
router.post("/add-post", upload.array("image"), ctrlWrapper(ctrl.createPost));

//moderate post
router.patch("/moderate-post", ctrlWrapper(ctrl.moderatePost));

//delete post
router.delete("/delete-post", ctrlWrapper(ctrl.removePost));

module.exports = router;
