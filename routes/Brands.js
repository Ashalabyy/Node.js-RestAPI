const BrandsController = require('../controllers/Brands');

const express = require('express');

const route = express.Router();

route.get('/Brands',BrandsController.getBrands);

route.get('/Brands/:BrandById',BrandsController.getBrandById);
 
route.post('/Brands',BrandsController.postBrands); 

route.put('/Brands/:BrandID',BrandsController.UpdateBrand);

route.delete('/Brands/:BrandById',BrandsController.deleteBrand);

module.exports = route;