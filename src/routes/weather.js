const express = require('express');
const axios = require('../utils/axios');
const Weather = require('../models/Weather');
const responseFormatter = require('../utils/resposeFormatter');
const coutryValidator = require('../middlewares/countryValidator');
const router = express.Router();
const appid = process.env.appid;

router.get('/:cc/:city', coutryValidator, (req, res, next) => {
    const { cc, city } = req.params;
    /*  axios
        .get(`/weather?q=${city},${cc}`) */
    const weatherType = req.query.weatherType;
    weather = new Weather();
    weather
        .getData(city, cc, weatherType)
        .then((response) => responseFormatter(res, 200, null, response))
        .catch(next);
});
//
module.exports = router;
