const { Post } = require("../../models");

const moderatePost = async (req, res) => {
  const { id } = req.body;

  const result = await Post.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    return res
      .status(409)
      .json({
        code: 409,
        message: `post doesn't moderate`,
      })
      .end();
  }

  res
    .status(201)
    .json({
      status: "success",
      code: 201,
      result,
    })
    .end();
};

module.exports = moderatePost;
