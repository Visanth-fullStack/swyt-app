const CategoryService = require('../services/categoryService');

class CategoryController {
    constructor() {
        this.categoryService = new CategoryService();
    }

    getAllCategories = async (req, res, next) => {
        try {
            const categoryNames = await this.categoryService.getAllCategoryNames();
            res.json(categoryNames);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CategoryController;