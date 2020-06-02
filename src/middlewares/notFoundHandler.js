const responseFormatter = require('../utils/resposeFormatter');

module.exports = (req, res, next) =>
    responseFormatter(res, 404, 'Sorry! This path is not found', null);
