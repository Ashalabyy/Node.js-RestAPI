const express = require('express');
const BannerController = require('../controllers/Banner');
const route = express.Router();

route.get('/Banner',BannerController.getBanner);
/*
route.post('',);
route.patch('');
route.delete('',);
*/
module.exports = route;