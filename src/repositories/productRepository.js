const Category = require("../models/category");
class ProductRepository {
  constructor(model) {
    this.model = model;
  }

  async create(productData) {
    return await this.model.create(productData);
  }

  async findAllWithFilters(filters = {}, sort = {}) {
    let query = this.model.find();

    // If categoryName is provided in filters, use it to filter products
    if (filters.categoryName) {
      // First, find the category ID based on the name
      const category = await Category.findOne({
        name: filters.categoryName,
      });
      if (category) {
        // If category found, filter products that have this category ID
        query = query.where("categories").in([category._id]);
      } else {
        // If category not found, return empty array
        return [];
      }
    }

    if (sort.price) {
      query = query.sort({ price: sort.price });
    }

    let products = await query.lean().exec();

    return products;
  }
}

module.exports = ProductRepository;
