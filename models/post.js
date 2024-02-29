const { Schema, model } = require("mongoose");

const postSchema = Schema(
  {
    authorName: {
      type: String,
    },
    locality: {
      type: String,
    },
    text: { type: String },
    imageUrl: [{ type: String }],
    status: { type: String, default: "new" },
  },
  { versionKey: false, timestamps: true }
);

const Post = model("posts", postSchema);

module.exports = Post;
