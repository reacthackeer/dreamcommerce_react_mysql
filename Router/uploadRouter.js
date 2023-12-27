const { multipleFileUpload, multipleFileDelete } = require('../Controller/uploadController');
const multer = require('multer');
const upload = multer({dest: '/public/images/check'});
const uploadRouter = require('express').Router();

uploadRouter.post('/multiple', multipleFileUpload);
uploadRouter.delete('/multiple', multipleFileDelete)

module.exports = {
    uploadRouter
}
