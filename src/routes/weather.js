const express = require("express");
const router = express.Router();
const axios = require("axios");
const appid = process.env.appid;

router.get("/:cc/:city", (req, res) => {
  const { cc, city } = req.params;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cc},${city}&appid=${appid}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
