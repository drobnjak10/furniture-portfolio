const express = require("express");
const galleryRouter = express.Router();
const db = require("../../database.js");
const multer = require("multer");

const path = require("path");
const fs = require("fs");
const { verifyToken } = require("../middlewares/auth.js");

const time = Date.now();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../front/public/gallery");
  },
  filename: (req, file, cb) => {
    cb(null, time + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

galleryRouter.get("/", async (req, res) => {
  let sql = "SELECT * FROM images";

  db.query(sql, (err, results) => {
    res.json({ images: results, status: true });
  });
});

galleryRouter.get("/:id", (req, res) => {
  let sql = "SELECT * FROM images WHERE _id = ?";

  db.query(sql, req.params.id, (error, results) => {
    if (error) {
      res.json({ error: "Insert valid data!", status: false });
      return;
    }
    res.json({ project: results[0] });
  });
});

// ADD PHOTO

galleryRouter.post("/", upload.array("files", 12), async (req, res) => {
  let sql = "INSERT INTO images SET ?";

  if (!req.files || !req.files.length) {
    return res.status(500).send({ error: "ERROR", status_code: 0 });
  }

  for (let file of req.files) {
    if (!file) {
      return res.status(500).send({ error: "ERROR" });
    }
    db.query(sql, { name: file.filename }, (err, results) => {
      if (err) {
        return res
          .status(500)
          .send({ error: "Insert valid data!", status_code: 0 });
      }
    });
  }
  return res.status(200).send({
    message: "Images added successfully",
    status: true,
  });
});

galleryRouter.put("/:id", async (req, res) => {
  const update = [req.body, req.params.id];

  let sql = "UPDATE images SET ? WHERE _id = ?";

  db.query(sql, update, (err, results) => {
    if (err) throw err;
    res.json({ message: "Image updated!", results });
  });
});

galleryRouter.delete("/:id", async (req, res) => {
  let sql = "DELETE FROM images WHERE _id = ?";

  db.query(
    "SELECT * FROM images WHERE _id = ?",
    req.params.id,
    (err, results) => {
      if (err) throw err;
      const image_path = results[0]?.name;

      if (image_path) {
        let pathFolder = path.join(
          __dirname,
          `../../../front/public/gallery/${image_path}`
        );
        fs.unlink(pathFolder, (err) => {
          if (err) {
            res.json({ error: `Could not found image ${pathFolder}` });
            return;
          }
        });
      }
    }
  );

  db.query(sql, req.params.id, (err, results) => {
    if (err) throw err;
    res.json({ message: "Image deleted!", results, status: true });
  });
});

module.exports = galleryRouter;