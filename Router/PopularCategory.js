const { addSinglePopularCategory, updateSinglePopularCategory, getallPopularCategory, getSinglePopularCategory, deleteSinglePopularCategory } = require('../Controller/PopularCategorycontroller');

const popularCategory = require('express').Router();

popularCategory.post('/',addSinglePopularCategory);
popularCategory.get('/', getallPopularCategory);
popularCategory.get('/:ID', getSinglePopularCategory);
popularCategory.put('/', updateSinglePopularCategory);
popularCategory.delete('/:ID', deleteSinglePopularCategory);

module.exports = {
    popularCategory
}