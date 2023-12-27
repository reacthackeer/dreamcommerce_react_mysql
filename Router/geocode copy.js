const {
    handleGetAllDivisions, 
    handleGetAllDistrict, 
    handleGetAllUpazilla, 
    handleGetAllUnion, 
    handleAddSingleDivision, 
    handleDeleteSingleDivision, 
    handleAddMultipleDivision, 
    handleAddSingleDistrict,
    handleAddMultipleDistrict,
    handleDeleteSingleDistrict,
    handleAddSingleUpazilla,
    handleAddMultipleUpazilla,
    handleDeleteSingleUpazilla,
    handleAddSingleUnion,
    handleAddMultipleUnion,
    handleDeleteSingleUnion
} = require('../Controller/geocode');

const geocode = require('express').Router();

geocode.get('/divisions', handleGetAllDivisions);
geocode.post('/divisions', handleAddSingleDivision);
geocode.post('/divisions/multiple', handleAddMultipleDivision);
geocode.delete('/divisions/:id', handleDeleteSingleDivision);

geocode.get('/districts/:division_id', handleGetAllDistrict);
geocode.post('/districts', handleAddSingleDistrict);
geocode.post('/districts/multiple', handleAddMultipleDistrict);
geocode.delete('/districts/:id', handleDeleteSingleDistrict);


geocode.get('/upazilas/:district_id', handleGetAllUpazilla);
geocode.post('/upazillas', handleAddSingleUpazilla)
geocode.post('/upazillas/multiple', handleAddMultipleUpazilla)
geocode.delete('/upazillas/:id', handleDeleteSingleUpazilla)

geocode.get('/unions/:upazilla_id',handleGetAllUnion);
geocode.post('/unions', handleAddSingleUnion);
geocode.post('/unions/multiple', handleAddMultipleUnion);
geocode.delete('/unions/multiple', handleDeleteSingleUnion);


module.exports = {
    geocode
}