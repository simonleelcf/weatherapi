const express = require("express");
const router = express.Router();
const weatherRouter = require("./routes/weather");

router.get("/", (req, res) => {
  res.send("Wellcom");
});

router.use("/api/weather", weatherRouter);

module.exports = router;
