const express = require("express");
const personRouter = express.Router();
const db = require("../../database.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { verifyToken } = require("../middlewares/auth.js");
const time = Date.now();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../front/public/team");
  },
  filename: (req, file, cb) => {
    cb(null, time + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

personRouter.get("/", (req, res) => {
  let sql = "SELECT * FROM persons";

  db.query(sql, (error, results) => {
    if (error) {
      res.json({ error: error.message, status: false });
    }
    res.json({ persons: results, status: true });
  });
});

personRouter.post("/", upload.single("avatar"), (req, res) => {
  let sql = "INSERT INTO persons SET ?";

  console.log(req.body);
  const { language, ...others } = req.body;
  const params = [
    { ...others, language: language[0], avatar: req.file?.filename || null },
  ];

  db.query(sql, params, (error, results) => {
    if (error) {
      res.json({ error: error.message, status: false });
      return;
    }
    res.json({ message: "Person added successfully", results, status: true });
  });
});

personRouter.put("/:id", upload.single("avatar"), (req, res) => {
  const update = [req.body, req.params.id];
  const {
    name,
    position,
    facebook,
    instagram,
    language,
    linkedin,
    twitter,
    email,
  } = req.body;

  let sql = "UPDATE persons SET ? WHERE _id = ?";

  if (!req.file) {
    db.query(sql, update, (error, results) => {
      if (error) {
        res.json({ error: error.message, status: false });
      }
      res.json({ message: "Person updated!", results, status: true });
    });
  } else {
    const obj = {
      name,
      position,
      language,
      facebook,
      linkedin,
      instagram,
      email,
      twitter,
      avatar: req.file.filename,
    };
    console.log("obj", obj);
    const params = [obj, req.params.id];
    db.query(sql, params, (error, results) => {
      if (error) {
        res.json({ error: error.message, status: false });
      }
      res.json({ message: "Person updated!", results, status: true });
    });
  }
});

personRouter.delete("/:id", (req, res) => {
  let sql = "DELETE FROM persons WHERE _id = ?";

  db.query(
    "SELECT * FROM persons WHERE _id = ?",
    req.params.id,
    (error, results) => {
      if (error) {
        res.json({ error: error.message, status: false });
        return;
      }
      const avatar = results[0]?.avatar;

      if (avatar) {
        let pathFolder = path.join(
          __dirname,
          `../../front/public/persons/${avatar}`
        );
        fs.unlink(pathFolder, (err) => {
          if (err) {
            res.json({
              error: `Could not found image ${avatar}`,
              status: false,
            });
            return;
          }
        });
      }
    }
  );

  db.query(sql, req.params.id, (err, results) => {
    if (err) res.json({ error: err.message, status: false });
    res.json({ message: "Person deleted!", results, status: true });
    return;
  });
});

module.exports = personRouter;
