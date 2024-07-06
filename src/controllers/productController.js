const ProductService = require('../services/productService');
class ProductController {
  constructor() {
    this.productService = new ProductService();
  }
  
    createProduct = async (req, res, next) => {
      try {
        console.log(req.body)
        if (!req.file) {
          return res.status(400).json({ error: 'Image file is required' });
        }
        
        const productData = {
          ...req.body,
          image: req.file.path,
          categories: JSON.parse(req.body.categories)
        };
        
        const product = await this.productService.createProduct(productData);
        res.status(201).json(product);
      } catch (error) {
        next(error);
      }
    }
  
    getProducts = async (req, res, next) => {
      try {
        const products = await this.productService.getProductsWithFilters(req.query);
        res.json(products);
      } catch (error) {
        next(error); 
      }
    }
  }
  
  module.exports = ProductController;