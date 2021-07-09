const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { response } = require("express");
const { Menu } = require("../models/Menu");
const { info } = require("console");

const router = express.Router();

fs.readdir("uploads", (error) => {
  if (error) {
    fs.mkdirSync("uploads");
  }
});

var upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
});

router.post("/uploadfile", upload.single("file"), (req, res) => {
  return res.json({
    success: true,
    url: res.req.file.path,
    filename: res.req.file.filename,
  });
});

router.post("/uploadmenu", (req, res) => {
  const menu = new Menu(req.body);
  menu.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

router.get("/getmenu", (req, res) => {
  Menu.find((err, menus) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, menus });
  });
});

router.delete("/:id", (req, res) => {
  Menu.remove({ _id: req.params.id }, (err) => {
    //:id는 파라미터
    if (err) return res.status(400).send({ success: false, err });
    res.status(200).json({ success: true });
  });
});

router.put("/:id", (req, res) => {
  console.log(req.body.filePath);
  Menu.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        describtion: req.body.describtion,
        filePath: req.body.filePath,
      },
    },
    { new: true },
    (err) => {
      if (err) return res.status(400).send({ success: false, err });
      res.status(200).json({ success: true });
    }
  );
});

module.exports = router;
