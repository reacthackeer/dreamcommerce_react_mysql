const dataConverterUtils = {};
dataConverterUtils.bufferDataConverter = (data) => {
    return JSON.parse(Buffer.from(JSON.parse(data)).toString());
}

dataConverterUtils.bufferDataMaker = (data)  => { 
    let bufferData = Buffer.from(JSON.stringify(data));
    return JSON.stringify(bufferData);
}

dataConverterUtils.searchQueryGenerator = (str) => {

    return`visible__url LIKE '%${str.split(' ').join('%')}%'`
}
module.exports = {
    dataConverterUtils
}
