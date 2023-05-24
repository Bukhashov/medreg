const { Router } = require('express');
const router = Router();

const Auth = require('../controller/auth.js');

// auth
router.post('/auth/user/singin', Auth.singin);
router.post('/auth/user/singup', Auth.singup);



// router.post('/')


module.exports = router;