const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:cc/:city", (req, res) => {
  const { cc, city } = req.params;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cc},${city}&appid=5e81cc397a852b237d303a06ca0b9b5a`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
