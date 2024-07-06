class CategoryRepository {
    constructor(model) {
        this.model = model;
    }

    async findAllCategories() {
        return await this.model.find({}, '_id name').exec();
    }
}

module.exports = CategoryRepository;