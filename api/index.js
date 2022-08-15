const express = require("express");
const cors = require("cors");
const personRouter = require("./src/routes/person.js");
const userRouter = require("./src/routes/user.js");
const galleryRouter = require("./src/routes/gallery.js");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/person", personRouter);
app.use("/api/user", userRouter);
app.use("/api/gallery", galleryRouter);

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on port ${process.env.PORT || 5000}`)
);
