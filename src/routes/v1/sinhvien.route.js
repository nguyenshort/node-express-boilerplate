const express = require('express');

const router = express.Router();
const sinhVienController = require('../../controllers/sinhvien.controller');

router.route('/').get(sinhVienController.getAll).post(sinhVienController.add);

router.route('/:_id').delete(sinhVienController.del).patch(sinhVienController.update);

module.exports = router;
