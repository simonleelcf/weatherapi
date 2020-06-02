const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", (req, res) => {
  res.send("Wellcom");
});

app.get("/api/weather/:cc/:city", (req, res) => {
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

app.listen(3000, () => console.log("listen at port 3000"));
