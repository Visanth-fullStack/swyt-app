const express = require('express');
const ProductController = require('../controllers/productController');
const upload = require('../middlewares/fileUpload');

const router = express.Router();

const productController = new ProductController();

router.post('/', upload.single('image'), productController.createProduct);
router.get('/', productController.getProducts);

module.exports = router;