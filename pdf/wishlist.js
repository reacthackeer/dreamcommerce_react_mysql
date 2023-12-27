const pdf = require('html-pdf');  
const options = {
    format: 'A4',
    orientation: 'portrait',
    border: { 
        top: '30px',
        bottom: '40px', 
    },
    };

const handlePdfGeneratorMaster = (stringFunction, data, option) => {
    return new Promise((resolve, reject)=>{
        pdf.create(stringFunction(data.products), option).toFile(`____cart_${data.user__id}_${data.date}.pdf`, (err, res) => {
            if (err) {
                console.log(err.message);
                reject({message: 'There was a server side error while generating pdf!', status__code: 500});
            }else{ 
                let filePath = res.filename.split('____');
                let pathAddress = filePath[filePath.length - 1];
                resolve({message: 'Successfully pdf generated', status__code: 200, path:'____'+pathAddress})
            }
            });
    })
}

module.exports = {
    options,
    handlePdfGeneratorMaster
}