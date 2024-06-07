const { addSinglePopularCategory, updateSinglePopularCategory, getallPopularCategory, getSinglePopularCategory, deleteSinglePopularCategory } = require('../Controller/PopularCategorycontroller');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const popularCategory = require('express').Router();

popularCategory.post('/', authenticateTokenModerator, addSinglePopularCategory);
popularCategory.get('/', getallPopularCategory);
popularCategory.get('/:id', getSinglePopularCategory);
popularCategory.put('/:id', authenticateTokenModerator,  updateSinglePopularCategory);
popularCategory.delete('/:id', authenticateTokenModerator,  deleteSinglePopularCategory);

module.exports = {
    popularCategory
}