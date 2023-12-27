const { registerUser, loginUser, updateUser, getAllNavbarData } = require('../Controller/AuthController');

const auth  = require('express').Router();
auth.post('/register', registerUser);
auth.post('/login', loginUser);
auth.put('/update', updateUser);
auth.get('/get-all-navbar-data', getAllNavbarData)
module.exports = {
    auth
}