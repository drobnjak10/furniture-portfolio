const express = require("express");
const { verifyToken } = require("../middlewares/auth.js");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../../database.js");
const jwt = require("jsonwebtoken");
const { getJwtToken } = require("../middlewares/auth.js");

userRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  db.query(
    "INSERT INTO users SET ?",
    { email, password: hashedPassword },
    (err, results) => {
      if (err) {
        res.json({ error: err.message, status: false });
        return;
      }

      res.json({ message: "Registered.", status: true });
    }
  );
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ error: "Wrong credentials!", status: false });
    return;
  }

  db.query("SELECT * FROM users WHERE email = ?", email, (err, results) => {
    if (err) {
      res.json({ error: "Something goes wrong.", status: false });
      return;
    }

    const user = results[0];

    if (!user) {
      res.json({ error: "Wrong email address!", status: false });
      return;
    }

    const isMatched = password
      ? bcrypt.compareSync(password, user.password)
      : null;

    if (!isMatched) {
      res.json({ error: "Wrong password!", status: false });
      return;
    }

    const token = getJwtToken(user);

    res.json({
      _id: user._id,
      email: user.email,
      token,
      message: "Logged in successfully.",
      status: true,
    });
  });
});

userRouter.post("/auth", verifyToken, async (req, res) => {
  if (!req.user || !req.user._id) {
    res.json({ error: "You are not authenticated.", status: false });
    return;
  }

  db.query(
    "SELECT * FROM users WHERE _id = ?",
    req.user._id,
    (err, results) => {
      if (err) {
        res.json({ err: err.message, status: false });
        return;
      }
      res.json({ user: results[0], status: true });
    }
  );
});

module.exports = userRouter;
