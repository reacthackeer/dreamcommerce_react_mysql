const jwt = require('jsonwebtoken');
const { getSingleSqlProduct } = require('../query/products__query');
let tokenSecret = process.env.JWT_SECRET;
function generateToken(userInfo) {
    return new Promise((resolve, reject) => {
        // Generate the token with the user payload
        jwt.sign({ userInfo }, tokenSecret, { expiresIn: '7d'}, (error, token) => {
            if (error) {
                reject(error);
            } else {
                resolve(token);
            }
        });
    });
};


function verifyToken(token) {
    let tokenSecret = process.env.JWT_SECRET;
    return new Promise((resolve, reject) => {
    jwt.verify(token, tokenSecret, (error, decoded) => {
        if (error) {
        reject(error);
        } else {
        resolve(decoded);
        }
    });
    });
}

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
    let authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'No token provided', status__code: 401 });
    }

    // Verify the token
    verifyToken(token)
        .then((decoded) => {   
            req.user = decoded;
            next();
        })
        .catch((err) => { 
            console.log(err.message);
            return res.status(403).json({ message: 'Invalid token', status__code: 403 });
    });
}

// Middleware to authenticate JWT token
async function authenticateTokenAddAdmin(req, res, next) {
    let authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'No token provided', status__code: 401 });
    }

    try {
        const decoded = await verifyToken(token);
        if (decoded && decoded.userInfo) {
            let userInfo = decoded.userInfo;
            let { email, phone, role } = userInfo; 
            let { role: newRole } = req.body;
            if (role === newRole || role < newRole) {
                let sql = `SELECT * FROM users WHERE email="${email}" AND phone="${phone}" AND role="${role}" AND block="false"`;
                try {
                    let {item} = await getSingleSqlProduct(sql); 
                    if(item && item?.role){ 
                        next() 
                    }else{
                        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                    }
                } catch (error) {
                    return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                } 
            } else {
                return res.status(401).json({ message: 'Invalid token', status__code: 401 });
            }
        } else {
            return res.status(401).json({ message: 'Invalid token', status__code: 401 });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
    }
}

async function authenticateTokenGetModerator(req, res, next) {
    let authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'No token provided', status__code: 401 });
    }

    try {
        const decoded = await verifyToken(token);
        if (decoded && decoded.userInfo) {
            let userInfo = decoded.userInfo; 
            let { email, phone, role } = userInfo;  
            if (role && email && phone && role < 7 && (role === Number(req.query.role) || role < Number(req.query.role))) { 
                let sql = `SELECT * FROM users WHERE email="${email}" AND phone="${phone}" AND role="${role}" AND block="false"`;
                try {
                    let {item} = await getSingleSqlProduct(sql); 
                    if(item && item?.role){ 
                        next() 
                    }else{
                        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                    }
                } catch (error) {
                    return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                } 
            } else {
                return res.status(401).json({ message: 'Invalid token', status__code: 401 });
            }
        } else {
            return res.status(401).json({ message: 'Invalid token', status__code: 401 });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
    }
}

async function authenticateTokenDeleteModerator(req, res, next) {
    let authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'No token provided', status__code: 401 });
    }

    try {
        const decoded = await verifyToken(token);
        if (decoded && decoded.userInfo) {
            let userInfo = decoded.userInfo; 
            let { email, phone, role } = userInfo;  
            if (role && email && phone && role < 7 ) { 
                let sql = `SELECT * FROM users WHERE email="${email}" AND phone="${phone}" AND role="${role}" AND block="false"`;
                try {
                    let {item} = await getSingleSqlProduct(sql); 
                    if(item && item?.role){ 
                        // next() 
                        let {id} = req.params;
                        if(id){ 
                            let sql = `SELECT * FROM users WHERE id="${id}"`;
                            try { 
                                let {item} = await getSingleSqlProduct(sql);  
                                if(item && item?.role){
                                    let newRole = item.role;
                                    if(role === newRole || role < newRole){
                                        next()
                                    }else{
                                        return res.status(401).json({ message: 'Invalid token', status__code: 401 });   
                                    }
                                }else{
                                    return res.status(401).json({ message: 'Invalid token', status__code: 401 });  
                                }
                            } catch (error) {
                                return res.status(401).json({ message: 'Invalid token', status__code: 401 }); 
                            }
                        }else{
                            return res.status(401).json({ message: 'Invalid token', status__code: 401 }); 
                        }
                    }else{
                        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                    }
                } catch (error) {
                    return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                } 
            } else {
                return res.status(401).json({ message: 'Invalid token', status__code: 401 });
            }
        } else {
            return res.status(401).json({ message: 'Invalid token', status__code: 401 });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
    }
}


async function authenticateTokenModerator(req, res, next) {
    let authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'No token provided', status__code: 401 });
    }

    try {
        const decoded = await verifyToken(token);
        if (decoded && decoded.userInfo) {
            let userInfo = decoded.userInfo; 
            let { email, phone, role } = userInfo;  
            if (role && email && phone && role < 7) { 
                let sql = `SELECT * FROM users WHERE email="${email}" AND phone="${phone}" AND role="${role}" AND block="false"`;
                try {
                    let {item} = await getSingleSqlProduct(sql); 
                    if(item && item?.role){ 
                        next() 
                    }else{
                        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                    }
                } catch (error) {
                    return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                } 
            } else {
                return res.status(401).json({ message: 'Invalid token', status__code: 401 });
            }
        } else {
            return res.status(401).json({ message: 'Invalid token', status__code: 401 });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
    }
}

async function authenticateTokenAdmin(req, res, next) {
    let authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'No token provided', status__code: 401 });
    }

    try {
        const decoded = await verifyToken(token);
        if (decoded && decoded.userInfo) {
            let userInfo = decoded.userInfo; 
            let { email, phone, role } = userInfo;  
            if (role && email && phone && role < 3) { 
                let sql = `SELECT * FROM users WHERE email="${email}" AND phone="${phone}" AND role="${role}" AND block="false"`;
                try {
                    let {item} = await getSingleSqlProduct(sql); 
                    if(item && item?.role){ 
                        next() 
                    }else{
                        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                    }
                } catch (error) {
                    return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                } 
            } else {
                return res.status(401).json({ message: 'Invalid token', status__code: 401 });
            }
        } else {
            return res.status(401).json({ message: 'Invalid token', status__code: 401 });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
    }
}

async function authenticateTokenUser(req, res, next) {
    let authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'No token provided', status__code: 401 });
    }

    try {
        const decoded = await verifyToken(token);
        if (decoded && decoded.userInfo) {
            let userInfo = decoded.userInfo; 
            let { email, phone, role } = userInfo;  
            if (role && email && phone && role < 10) { 
                let sql = `SELECT * FROM users WHERE email="${email}" AND phone="${phone}" AND role="${role}" AND block="false"`;
                try {
                    let {item} = await getSingleSqlProduct(sql); 
                    if(item && item?.role){ 
                        next() 
                    }else{
                        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                    }
                } catch (error) {
                    return res.status(401).json({ message: 'Invalid token', status__code: 401 });
                } 
            } else {
                return res.status(401).json({ message: 'Invalid token', status__code: 401 });
            }
        } else {
            return res.status(401).json({ message: 'Invalid token', status__code: 401 });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token', status__code: 401 });
    }
}

module.exports = {
    generateToken,
    verifyToken,
    authenticateToken,
    authenticateTokenAddAdmin,
    authenticateTokenGetModerator,
    authenticateTokenDeleteModerator,
    authenticateTokenModerator,
    authenticateTokenUser,
    authenticateTokenAdmin
}