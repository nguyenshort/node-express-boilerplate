const SinhVien = require('../models/sinhvien.model');

const pick = require('../utils/pick');

const getAll = async (req, res) => {
  const [results, count] = await Promise.all([SinhVien.find(), SinhVien.countDocuments()]);

  return res.status(200).json({
    results,
    count,
  });
};

const add = async (req, res) => {
  const { name, address, born } = pick(req.body, ['name', 'address', 'born']);

  if (!name || !address || !born) {
    return res.status(403).send('Form không hợp lệ');
  }
  try {
    const sinhvien = await SinhVien.create({
      name,
      address,
      born,
    });

    return res.status(200).json(sinhvien);
  } catch (e) {
    return res.status(500).send('Lỗi khi tạo sinh viên');
  }
};

const del = async ({ params }, res) => {
  const { _id } = params;
  if (!_id) {
    return res.status(403).send('ID là bắt buộc');
  }
  const result = await SinhVien.findByIdAndDelete(_id);
  if (!result) {
    return res.status(404).send('Sinh viên không tồn tại');
  }
  return res.status(200).json(result);
};

const update = async ({ params, body }, res) => {
  const { _id } = params;
  if (!_id) {
    return res.status(403).send('ID là bắt buộc');
  }
  const { name, address, born } = pick(body, ['name', 'address', 'born']);

  if (!name || !address || !born) {
    return res.status(403).send('Form không hợp lệ');
  }

  const result = await SinhVien.findByIdAndUpdate(_id, { name, address, born }, { returnOriginal: false });

  if (!result) {
    return res.status(404).send('Sinh viên không tồn tại');
  }
  return res.status(200).json(result);
};

module.exports = {
  getAll,
  add,
  del,
  update,
};
