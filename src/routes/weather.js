const express = require('express');
const axios = require('../utils/axios');
const Weather = require('../models/Weather');
const router = express.Router();
const appid = process.env.appid;

router.get('/:cc/:city', (req, res) => {
    const { cc, city } = req.params;
    /*  axios
        .get(`/weather?q=${city},${cc}`) */
    weather = new Weather();
    weather
        .getData(city, cc)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => console.log(err));
});
//
module.exports = router;
