const { getAllDivisions, getAllDistrict, getAllUpazila, getAllUnions } = require('../Controller/geocode');
const { authenticateTokenUser } = require('../utils/jsonwebtoken');

const geocode = require('express').Router();

geocode.get('/divisions', authenticateTokenUser, getAllDivisions);
geocode.get('/districts/:divisions_id', authenticateTokenUser, getAllDistrict);
geocode.get('/upazilas/:district_id', authenticateTokenUser, getAllUpazila);
geocode.get('/unions/:upazilla_id', authenticateTokenUser, getAllUnions);

module.exports = {
    geocode
}