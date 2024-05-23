const asyncHandler = require('express-async-handler');

const handleCalculatePrice = asyncHandler(async(req, res, next)=>{
    

    res.json('done')
});

module.exports = {
    handleCalculatePrice
}