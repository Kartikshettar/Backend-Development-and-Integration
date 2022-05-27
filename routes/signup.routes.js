const express = require('express');
const router = express.Router();
const authorize = require('../middleware/auth')
const Role = require('../config/config.json');
const {  authenticateSchema,
    authenticate,
    revokeTokenSchema,
    revokeToken,
    refreshToken,
    registerSchema,
    register,
    verifyEmailSchema,
    verifyEmail,
    forgotPasswordSchema,
    forgotPassword,
    validateResetTokenSchema,
    validateResetToken,
    resetPasswordSchema,
    resetPassword,
    getAll,
    getById,
    createSchema,
    create,
    updateSchema,
    update,
    _delete,} = require('../controller/user.controller');

router.post('/authenticate', authenticateSchema, authenticate);
router.post('/refresh-token', refreshToken);
router.post('/revoke-token', authorize(), revokeTokenSchema, revokeToken);
router.post('/register', registerSchema, register);
router.post('/verify-email', verifyEmailSchema, verifyEmail);
router.post('/forgot-password', forgotPasswordSchema, forgotPassword);
router.post('/validate-reset-token', validateResetTokenSchema, validateResetToken);
router.post('/reset-password', resetPasswordSchema, resetPassword);
router.get('/', authorize(Role.Admin), getAll);
router.get('/:id', authorize(), getById);
router.post('/', authorize(Role.Admin), createSchema, create);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;
