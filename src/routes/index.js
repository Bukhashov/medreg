const { Router } = require('express');
const router = Router();

const Auth = require('../controller/auth.js');
const Group = require('../controller/group');
// auth
router.post('/singin', Auth.singin);
router.post('/singup', Auth.singup);


module.exports = router;