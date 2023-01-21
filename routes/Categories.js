const CategorieController = require('../controllers/Categories');

const express = require('express');

const route = express.Router();

route.get('/categories',CategorieController.getCategories);

route.post('/categories',CategorieController.postCategories);

route.delete('/categories/:CatById',CategorieController.deleteCategorie);


module.exports = route;