const getAllBrandsSql = `SELECT * FROM brands LIMIT ?,?`;
const getSingleBrandSql = (uid) => `SELECT * FROM brands WHERE uid='${uid}'`;
const addSingleBrandSql = ({brand, uid, src}) => `INSERT INTO brands (brand, uid, src) VALUES ('${brand}','${uid}','${src}')`;
const updateSingleBrandSql = ({uid, src, brand, ID}) => `UPDATE brands SET uid='${uid}', src='${src}', brand='${brand}' WHERE ID='${ID}'`;
module.exports = {
    getAllBrandsSql, 
    getSingleBrandSql,
    addSingleBrandSql,
    updateSingleBrandSql
}