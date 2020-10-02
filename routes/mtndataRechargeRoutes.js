const express = require('express');
const router = express.Router();
const paths = require('./paths/mtn_data');
const MtnDataController = require('../controllers/mtn_data');

// methods
// router.post(paths.ngDataRecharge, MtnDataController);
// router.post(paths.hourlyRecurring, MtnDataController);
// router.post(paths.dailylyRecurring, MtnDataController);
// router.post(paths.weeklyRecurring, MtnDataController);
// router.post(paths.monthlylyRecurring, MtnDataController);
// router.post(paths.ngGetAmountForAProduct, MtnDataController);
// router.post(paths.ngCancelrecurring, MtnDataController);
// router.post(paths.ngBulkDataRecharge, MtnDataController);
// router.post(paths.ngStatusOfBill, MtnDataController);



module.exports = router;