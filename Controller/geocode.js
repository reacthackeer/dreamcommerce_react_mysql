const asyncHandler = require('express-async-handler');
const {getAllJustSqlProduct} = require('../query/products__query'); 

const getAllDivisions = asyncHandler(async(req, res, next)=>{
    let sql = 'SELECT * FROM divisions';
    try {
        let result = await getAllJustSqlProduct(sql);
        res.json(result)
    } catch (error) {
        next(new Error(error.message))
    }
});

const getAllDistrict = asyncHandler(async(req, res, next)=>{
    let {divisions_id} = req.params;
    if(divisions_id){
        let sql = `SELECT * FROM districts WHERE division_id="${divisions_id}"`;
        try {
            let result = await getAllJustSqlProduct(sql);
            res.json(result)
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request!'))
    }
});

const getAllUpazila = asyncHandler(async(req, res, next)=>{
    let {district_id} = req.params;
    if(district_id){
        let sql = `SELECT * FROM upazilas WHERE district_id="${district_id}"`;
        try {
            let result = await getAllJustSqlProduct(sql);
            res.json(result)
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request!'))
    }
})

const getAllUnions = asyncHandler(async(req, res, next)=>{
    let {upazilla_id} = req.params;
    if(upazilla_id){
        let sql = `SELECT * FROM unions WHERE upazilla_id="${upazilla_id}"`;
        try {
            let result = await getAllJustSqlProduct(sql);
            res.json(result)
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request!'))
    }
});


module.exports = {
    getAllDivisions,
    getAllDistrict,
    getAllUpazila,
    getAllUnions
}