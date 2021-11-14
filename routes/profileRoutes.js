const { Router } = require('express');
const router = Router();

const authController = require('../controllers/profilecontroller');

router.post('/', authController.update_user);

module.exports = router;