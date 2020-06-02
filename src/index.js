require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./utils/logger');
const PORT = process.env.PORT || 3000;
const notFoundHandler = require('./middlewares/notFoundHandler');

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('common'));
}

app.use(helmet());
app.use(routes);
app.use(notFoundHandler);

app.listen(PORT, () => logger.info('listen at port 3000'));
