const CategoryRepository = require('../repositories/categoryRepository');
const Category = require('../models/category');

class CategoryService {
    constructor() {
        this.categoryRepository = new CategoryRepository(Category);
    }

    async getAllCategoryNames() {
        const categories = await this.categoryRepository.findAllCategories();
        return categories.map(category => category);
    }
}

module.exports = CategoryService;