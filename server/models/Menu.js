const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 50,
      required: true,
    },
    describtion: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //만든 날짜와 업데이트 날짜가 표시됨
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = { Menu };
