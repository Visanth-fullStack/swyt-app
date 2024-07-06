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

    if (filters.categoryName) {
      const category = await Category.findOne({
        name: filters.categoryName,
      });
      if (category) {
        query = query.where("categories").in([category._id]);
      } else {
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
