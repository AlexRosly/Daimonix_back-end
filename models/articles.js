const { Schema, model } = require("mongoose");

const articlesSchema = Schema(
  {
    title: {
      type: String,
    },
    text: { type: String },
    imageUrl: [{ type: String }],
  },
  { versionKey: false, timestamps: true }
);

const Article = model("article", articlesSchema);

module.exports = Article;
