const { registerUser, loginUser, updateUser, getAllNavbarData, getPrintUserInfo, handleRegisterUserFromAdminPanel, handleGetAllAdminInfo, updateAdminUser, deleteAdminUser, handleChangePasswordByAdmin } = require('../Controller/AuthController');
const { authenticateTokenAddAdmin, authenticateTokenGetModerator, authenticateTokenDeleteModerator, authenticateTokenModerator, authenticateTokenUser } = require('../utils/jsonwebtoken');

const auth  = require('express').Router();
auth.post('/register', registerUser);
auth.post('/admin-register', authenticateTokenAddAdmin, handleRegisterUserFromAdminPanel);
auth.get('/get-all-admin', authenticateTokenGetModerator, handleGetAllAdminInfo);
auth.put('/admin-update', authenticateTokenAddAdmin, updateAdminUser);

auth.post('/login', loginUser);
auth.get('/get-info/:user__id', getPrintUserInfo);
auth.put('/update', authenticateTokenUser, updateUser);
auth.put('/admin-change-password',authenticateTokenModerator, handleChangePasswordByAdmin);
auth.delete('/admin-delete/:id', authenticateTokenDeleteModerator, deleteAdminUser);
auth.get('/get-all-navbar-data', getAllNavbarData)

module.exports = {
    auth
}