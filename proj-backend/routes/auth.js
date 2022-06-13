const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const {signout, signup} = require('../controllers/auth');

router.post('/signup',
[
    check("firstname").isLength({min: 3}).withMessage('name should be atleast 3 characters.'),
    check("email").isEmail().withMessage('email is required.'),
    check("password").isLength({min: 3}).withMessage('password should be atleast 3 characters.')
],
 signup);
router.get('/signout', signout);


module.exports = router;