const express = require('express');
const CategoryController = require('../controllers/categoryController');

const router = express.Router();
const categoryController = new CategoryController();

router.get('/', categoryController.getAllCategories);

module.exports = router;