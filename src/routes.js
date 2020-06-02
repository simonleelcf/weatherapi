const express = require('express');
const router = express.Router();
const weatherRouter = require('./routes/weather');
const responseFormatter = require('./utils/resposeFormatter');

router.get('/', (req, res) => responseFormatter(res, 200, 'welcome', null));

router.use('/api/weather', weatherRouter);

module.exports = router;
