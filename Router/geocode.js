const { getAllDivisions, getAllDistrict, getAllUpazila, getAllUnions } = require('../Controller/geocode');

const geocode = require('express').Router();

geocode.get('/divisions', getAllDivisions);
geocode.get('/districts/:divisions_id', getAllDistrict);
geocode.get('/upazilas/:district_id', getAllUpazila);
geocode.get('/unions/:upazilla_id',getAllUnions)
module.exports = {
    geocode
}