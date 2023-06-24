const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllUsersControllers, getAllDoctorsControllers, changeAccountStatusController } = require('../controllers/adminCtrl');

const router = express.Router();

//GET METHOD || USERS
router.get('/getAllUsers', authMiddleware, getAllUsersControllers);

//GET METHOD || DOCTORS
router.get('/getAllDoctors', authMiddleware, getAllDoctorsControllers);

//POST ACCOUNT STATUS
router.post('/changeAccountStatus', authMiddleware, changeAccountStatusController);

module.exports = router;