const asyncHandler = require('express-async-handler');
const { v4: uid } = require('uuid');
const fileExtension = require('file-extension');
const fs = require('fs');
const path = require('path');

    
const multipleFileUpload = asyncHandler(async(req, res, next) => {
    
    let files = req.files?.images; 

    if(files){
        if(files.length){
            let images = [];
            let imageLinks = [];
            files.forEach((info)=>{
                const fileName = uid()+'.'+fileExtension(info.name);
                images.push("/images/check/"+fileName);
                imageLinks.push(fileName);
            })
            let errors = [];
            files.forEach((file, index) => {  
                const imageBuffer = file.data;
                let fileName = imageLinks[index];
                const filePath = path.join(__dirname, './../public/images/check', fileName);  
                
                fs.writeFile(filePath, imageBuffer, (err) => {
                    if (err) {
                        next(new Error(err.message))
                    }
                });
            })
            res.json({message: 'Successfully All File Uploaded', status__code: 200, images: images})
        }else{
            files = new Array(files);
            let images = [];
            let imageLinks = [];
            files.forEach((info)=>{
                const fileName = uid()+'.'+fileExtension(info.name);
                images.push("/images/check/"+fileName);
                imageLinks.push(fileName);
            })
            let errors = [];
            files.forEach((file, index) => {  
                const imageBuffer = file.data;
                let fileName = imageLinks[index];
                const filePath = path.join(__dirname, './../public/images/check', fileName);  
                
                fs.writeFile(filePath, imageBuffer, (err) => {
                    if (err) {
                        next(new Error(err.message))
                    }
                });
            })
            res.json({message: 'Successfully All File Uploaded', status__code: 200, images: images})
        }
    }else{
        next(new Error('Invalid server request!'))
    }
})

const multipleFileDelete = asyncHandler(async(req, res, next) => {
    
    let images = req.headers?.images?.split(',');
    if(images && images?.length > 0){
        let deletedImages = [];
        images.forEach((info)=>{
            const filePath = path.join(__dirname, './../public', info);  
            if(fs.existsSync(filePath)){
                fs.unlinkSync(filePath);
            }
        });
        
        res.json({message: 'Successfully all file deleted!', status__code: 200});
    }else{
        next(new Error('Invalid Server Request!'));
    }
});

module.exports = {
    multipleFileUpload,
    multipleFileDelete
}