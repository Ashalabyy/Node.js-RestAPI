const ProductController = require('../controllers/Products');

const express = require('express');

const route = express.Router();


route.get('/products',ProductController.getProducts);

route.post('/products',ProductController.PostProducts);


module.exports = route;