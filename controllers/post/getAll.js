const { Post } = require("../../models");

const getAll = async (req, res) => {
  const result = await Post.find({ status: "on site" });

  if (!result) {
    res
      .status(404)
      .json({
        status: "error",
        code: 404,
        message: "post doesn't exist in DB",
      })
      .end();
  }

  return res
    .status(200)
    .json({
      status: "success",
      code: 200,
      result,
    })
    .end();
};

module.exports = getAll;
