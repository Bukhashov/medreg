const { Router } = require('express');
const router = Router();

const Auth = require('../controller/auth.js');

// auth
router.post('/singin', Auth.singin);
router.post('/singup', Auth.singup);

// router.post('/')


module.exports = router;