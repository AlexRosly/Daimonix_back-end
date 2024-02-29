const { Post } = require("../../models");
const cloudinary = require("../../utils/cloudinary");
const path = require("path");
const fs = require("fs").promises;

const createPost = async (req, res) => {
  //   const { authorName, locality, text } = req.body;
  // const post = await Post.create({ ...req.body });
  // if (!post) {
  //   return res
  //     .status(409)
  //     .json({
  //       code: 409,
  //       message: `post doesn't created`,
  //     })
  //     .end();
  // }
  // res
  //   .status(201)
  //   .json({
  //     status: "success",
  //     code: 201,
  //     post,
  //   })
  //   .end();

  try {
    const uploader = async (path) => await cloudinary.uploads(path, "DAIMONIX");
    if (req.method === "POST") {
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        urls.push(newPath);
        await fs.unlink(path);
      }

      const result = await Post.create({
        ...req.body,
        imageUrl: urls,
      });
      if (!result) {
        return res
          .status(404)
          .json({
            code: 404,
            message: "post don't created",
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
    } else {
      res
        .status(405)
        .json({
          err: `${req.method} method not allowed`,
        })
        .end();
    }
  } catch (error) {
    console.log({ error });
    return res
      .status(404)
      .json({
        code: 404,
        message: "post don't created",
      })
      .end();
  }

  // console.log({ result });

  res.end();
};

module.exports = createPost;
