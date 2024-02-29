const { Post } = require("../../models");

const removePost = async (req, res) => {
  const { id } = req.query;
  //   console.log(req.params);

  const result = await Post.findByIdAndRemove(id);

  if (!result) {
    return res
      .status(401)
      .json({
        status: "error",
        code: 401,
        message: `post doesn't deleted`,
      })
      .end();
  }

  res.json({
    code: 201,
    message: "post has been deleted",
  });
};

module.exports = removePost;
