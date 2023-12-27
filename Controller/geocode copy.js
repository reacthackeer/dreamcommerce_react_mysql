const asyncHandler = require('express-async-handler'); 
const Division = require('../model/Division');
const District = require('../model/District');
const Upazilla = require('../model/Upazilla');
const Union = require('../model/Union');

const handleGetAllDivisions = asyncHandler(async(req, res, next)=>{
    try {
        let result = await Division.findAll({});
        res.json(result);
    } catch (error) {
        next(new Error(error.message))
    }
});
const handleAddSingleDivision = asyncHandler(async(req, res, next)=>{
    let {name, bn_name, url} = req.body;
    if(name && bn_name && url){
        try {
            let result = await Division.create(req.body);
            res.json(result)
        } catch (error) {
            next(new Error('This division already existed!'))
        }
    }else{
        next(new Error('Invalid post request!'))
    }
})

const handleAddMultipleDivision = asyncHandler(async(req, res, next)=>{
    let allItems = req.body;
    if(allItems && allItems.length){
        try {
            let result = await Division.bulkCreate(req.body);
            res.json(result)
        } catch (error) {
            next(new Error('This division already existed!'))
        }
    }else{
        next(new Error('Invalid post request!'))
    }
});
const handleAddMultipleDistrict = asyncHandler(async(req, res, next)=>{
    let allItems = req.body;
    if(allItems && allItems.length){
        try {
            let result = await District.bulkCreate(req.body);
            res.json(result)
        } catch (error) {
            next(new Error('This district already existed!'))
        }
    }else{
        next(new Error('Invalid post request!'))
    }
});
const handleAddMultipleUpazilla = asyncHandler(async(req, res, next)=>{
    let allItems = req.body;
    if(allItems && allItems.length){
        try {
            let result = await Upazilla.bulkCreate(req.body);
            res.json(result)
        } catch (error) {
            next(new Error('This upazilla already existed!'))
        }
    }else{
        next(new Error('Invalid post request!'))
    }
});
const handleAddMultipleUnion = asyncHandler(async(req, res, next)=>{
    let allItems = req.body;
    if(allItems && allItems.length){
        try {
            let result = await Union.bulkCreate(req.body);
            res.json(result)
        } catch (error) {
            next(new Error('This union already existed!'))
        }
    }else{
        next(new Error('Invalid post request!'))
    }
});

const handleDeleteSingleDivision = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        let result = await Division.destroy({where: {id}});
        if(result){
            res.json({message: 'Successfully deleted!', status__code: 200});
        }else{  
            next(new Error('Internal server error!'))
        }
    }else{
        next(new Error('Invalid delete request!'))
    }
})
const handleGetAllDistrict = asyncHandler(async(req, res, next)=>{
    let {division_id} = req.params;
    if(division_id){
        try {
            let result = await District.findAll({where: {division_id}});
            res.json(result);
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid get request!'))
    }
});
const handleAddSingleDistrict = asyncHandler(async(req, res, next)=>{
    let { name, division_id, bn_name, lat, lon, url} = req.body;
    if(name && bn_name && url && division_id && lat && lon){
        let name_id = name+"_"+division_id;
        let postInfo = {...req.body, name_id};
        try {
            let result = await Division.create(postInfo);
            res.json(result)
        } catch (error) {
            next(new Error('This district already existed!'))
        }
    }else{
        next(new Error('Invalid post request!'))
    }
});
const handleDeleteSingleDistrict = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        let result = await District.destroy({where: {id}});
        if(result){
            res.json({message: 'Successfully deleted!', status__code: 200});
        }else{  
            next(new Error('Internal server error!'))
        }
    }else{
        next(new Error('Invalid delete request!'))
    }
});
const handleGetAllUpazilla = asyncHandler(async(req, res, next)=>{
    let {district_id} = req.params;
    if(district_id){
        try {
            let result = await Upazilla.findAll({where: {district_id}});
            res.json(result);
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid get request!'))
    }
});
const handleAddSingleUpazilla = asyncHandler(async(req, res, next)=>{
    let {district_id, name, bn_name, url} = req.body;
    if(name && bn_name && url && district_id){
        let name_id = name+"_"+district_id;
        let postInfo = {...req.body, name_id};
        try {
            let result = await Upazilla.create(postInfo);
            res.json(result)
        } catch (error) {
            next(new Error('This Upazilla already existed!'))
        }
    }else{
        next(new Error('Invalid post request!'))
    }
});
const handleDeleteSingleUpazilla = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        let result = await Upazilla.destroy({where: {id}});
        if(result){
            res.json({message: 'Successfully deleted!', status__code: 200});
        }else{  
            next(new Error('Internal server error!'))
        }
    }else{
        next(new Error('Invalid delete request!'))
    }
});
const handleGetAllUnion = asyncHandler(async(req, res, next)=>{
    let {upazilla_id} = req.params;
    if(upazilla_id){
        try {
            let result = await Union.findAll({where: {upazilla_id}});
            res.json(result);
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid get request!'))
    }
});
const handleAddSingleUnion = asyncHandler(async(req, res, next)=>{
    let {upazilla_id, name, bn_name, url} = req.body;
    if(name && bn_name && url && upazilla_id){
        let name_id = name+"_"+upazilla_id;
        let postInfo = {...req.body, name_id};
        try {
            let result = await Union.create(postInfo);
            res.json(result)
        } catch (error) {
            next(new Error('This Union already existed!'))
        }
    }else{
        next(new Error('Invalid post request!'))
    }
});
const handleDeleteSingleUnion= asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        let result = await Union.destroy({where: {id}});
        if(result){
            res.json({message: 'Successfully deleted!', status__code: 200});
        }else{  
            next(new Error('Internal server error!'))
        }
    }else{
        next(new Error('Invalid delete request!'))
    }
});
module.exports = {
    handleAddMultipleDistrict,
    handleAddMultipleDivision,
    handleAddMultipleUnion,
    handleAddMultipleUpazilla, 
    handleGetAllDivisions, 
    handleAddSingleDivision,
    handleDeleteSingleDivision,
    handleGetAllDistrict,
    handleAddSingleDistrict,
    handleDeleteSingleDistrict,
    handleGetAllUpazilla,
    handleAddSingleUpazilla,
    handleDeleteSingleUpazilla,
    handleGetAllUnion,
    handleAddSingleUnion,
    handleDeleteSingleUnion
}