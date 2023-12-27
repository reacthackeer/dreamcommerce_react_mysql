const jwt = require('jsonwebtoken')
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

module.exports = {
    generateToken,
    verifyToken,
    authenticateToken
}