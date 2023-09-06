const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '1.0.0',
  info: {
    title: 'mNet Datalake API documentation',
    version,
    license: {
      name: 'MIT',
      url: '#',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
