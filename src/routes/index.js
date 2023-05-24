const { Router } = require('express');
const router = Router();

const Auth = require('../controller/auth.js');
const Docter = require('../controller/docter.js');
const Result = require('../controller/result.js');

// auth
router.post('/auth/user/singin', Auth.singin);
router.post('/auth/user/singup', Auth.singup);
router.post('/auth/docter/singin', Docter.singin);
router.post('/auth/docter/singup', Docter.singup);

router.get('/result/all/:iin', Result.getAll);
router.get('/result/:id', Result.getById);


module.exports = router;