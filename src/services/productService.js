const ProductRepository = require('../repositories/productRepository');
const Product = require('../models/product');

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository(Product);
  }
  
    async createProduct(productData) {
      return await this.productRepository.create(productData);
    }
  
    async getProductsWithFilters(queryParams) {
      const filters = {};
      const sort = {};
  
      if (queryParams.categoryName) {
        filters.categoryName = queryParams.categoryName;
      }
  
      if (queryParams.sortPrice) {
        sort.price = queryParams.sortPrice === 'asc' ? 1 : -1;
      }
  
      return await this.productRepository.findAllWithFilters(filters, sort);
    }
  }
  
  module.exports = ProductService;