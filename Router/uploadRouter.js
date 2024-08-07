const { multipleFileUpload, multipleFileDelete } = require('../Controller/uploadController'); 
const uploadRouter = require('express').Router();

uploadRouter.post('/multiple', multipleFileUpload);
uploadRouter.delete('/multiple', multipleFileDelete)

module.exports = {
    uploadRouter
}
