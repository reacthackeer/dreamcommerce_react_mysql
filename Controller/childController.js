const asyncHandler = require('express-async-handler');
const { getAllJustSqlProduct, getSingleSqlProduct, addSingleSqlProduct, updateSingleSqlProduct } = require('../query/products__query');
const { deleteGeneralSqlOperation } = require('../query/offer__query');

const getAllChildNavbar = asyncHandler(async(req, res, next)=>{
    
    let sql = `SELECT * FROM child`;
    try {
        let result = await getAllJustSqlProduct(sql);
        console.log(result);
        res.json(result);
    } catch (error) {
        let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
    }
})

// const getAllChildNavbar = asyncHandler(async(req, res, next)=>{
//     let {name, parent} = req.query;
//     if(name && parent){
//         let sql = `SELECT * FROM child WHERE name="${name}" AND parent="${parent}"`;
//         try {
//             let result = await getAllJustSqlProduct(sql);
//             res.json(result);
//         } catch (error) {
//             let newError = new Error(error.message);
//                 newError.status = 500;
//                 next(newError);
//         }
//     }else{
//         let newError = new Error("Invalid server request");
//             newError.status=204;
//             next(newError);
//     }
// })

const getAllChildParentNavbar = asyncHandler(async(req, res, next)=>{
    let {parent, up} = req.query;
    if(parent && up){
        let sql = `SELECT * FROM child WHERE parent="${parent}" AND up="${up}"`;
        try {
            let result = await getAllJustSqlProduct(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
                newError.status = 500;
                next(newError);
        }
    }else{
        let newError = new Error("Invalid server request");
            newError.status=204;
            next(newError);
    }
})

const getSingleChildNavbar = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    if(item__id){
        let sql = `SELECT * FROM child WHERE ID="${item__id}"`;
        try {
            let result = await getSingleSqlProduct(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
        }
    }else{
        let newError = new Error("Invalid server request");
        newError.status=204;
        next(newError);
    }
})

const addSingleChildNavbar = asyncHandler(async(req, res, next)=>{
    let {name, parent, uid, src, up} = req.body;
    if( name && parent && uid && src && up){
        let sql = `INSERT INTO child (name, parent, uid, src, up) VALUES ("${name}","${parent}","${uid}","${src}","${up}")`;
        try {
            let result = await addSingleSqlProduct(sql);
            if(result.status__code === 201){
                res.json(result);
            }else{
                let newError = new Error('Invalid server request!');
                newError.status=204;
                next(newError);
            }
        } catch (error) {
            let newError = new Error(error.message);
            newError.status=500;
            next(error);
        }
    }else{
        let newError = new Error('Invalid server request!');
            newError.status=204;
            next(newError);
    }
})

const updateSingleChildNavbar = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    let {name, parent, uid, src, up} = req.body;
    if(item__id &&  name && parent && uid && src && up){
        let sql = `UPDATE child SET name="${name}",parent="${parent}",uid="${uid}",src="${src}", up="${up}" WHERE ID="${item__id}"`;
        try {
            let result = await updateSingleSqlProduct(sql);
            if(result.status__code === 200){
                res.json(result);
            }else{
                let newError = new Error('Invalid server request!');
                newError.status=204;
                next(newError);
            }
        } catch (error) {
            let newError = new Error(error.message);
            newError.status=500;
            next(error);
        }
    }else{
        let newError = new Error('Invalid server request!');
        newError.status=204;
        next(newError);
    }
})


const deleteSingleChildNavbar = asyncHandler(async(req, res, next)=>{
    const ID = req.params?.item__id  
    if(ID){ 
        const query = `DELETE FROM child WHERE ID="${ID}"`
        try {
            const result = await deleteGeneralSqlOperation(query);
            if(result?.status__code === 200){
                res.json(result);
            }else{
                const errorBody = new Error('DELETED DATA NOT FOUND!');
                errorBody.status = 500;
                next(errorBody);
            }
        } catch (error) {  
            const errorBody = new Error('An error occurred while deleting data');
            errorBody.status = 500;
            next(errorBody);
        }
    }else{
        const error = new Error('Invalid server request?');
        error.status = 500;
        next(error);
    }
})


module.exports = {
    getAllChildNavbar,
    getSingleChildNavbar,
    addSingleChildNavbar,
    updateSingleChildNavbar,
    deleteSingleChildNavbar,
    getAllChildParentNavbar
}