const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');

const menuRoute = require('./menu.route');
const orderRoute = require('./order.route');
const outletRoute = require('./outlet.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/order',
    route: orderRoute,
  },
  {
    path: '/menu',
    route: menuRoute,
  },
  {
    path: '/outlet',
    route: outletRoute,
  },
];

const devRoutes = [
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
