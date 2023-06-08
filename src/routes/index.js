const { Router } = require('express');
const router = Router();

const Auth = require('../controller/auth.js');
const Docter = require('../controller/docter.js');
const Result = require('../controller/result.js');
const Record = require('../controller/record.js');
const Drugs = require('../controller/drugs.js');

const Reg = require('../controller/reg.js');
// auth
router.post('/auth/user/singin', Auth.singin);
router.post('/auth/user/singup', Auth.singup);
router.post('/auth/docter/singin', Docter.singin);
router.post('/auth/docter/singup', Docter.singup);

router.get('/result/all/:iin', Result.getAll);
router.get('/result/:id', Result.getById);
router.post('/result/add', Result.add);


// флюорография
router.post('/fluorography/record', Record.fluorographyRecord);
router.get('/fluorography/all', Record.fluorographyGetAll);
router.get('/fluorography/:id', Record.fluorographyGetAll);

router.get('/reg/info/:iin', Reg.getInfo);
router.post('/reg/add/user', Reg.addUser);

router.get('/drugs/:iin/all', Drugs.getByInn);
router.post('/drugs/add', Drugs.add);

module.exports = router;