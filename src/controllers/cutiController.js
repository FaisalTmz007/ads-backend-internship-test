const { Karyawan, Cuti } = require('../models/index')

exports.findAll = async (req, res) => {
    try {
        const { sortBy, sortOrder } = req.query;
        let sortColumn = 'createdAt';
        let orderDirection = 'ASC';

        if (sortBy === 'tanggal_cuti' || sortBy ==='lama_cuti'){
            sortColumn = sortBy
        }

        if (sortOrder && sortOrder.toUpperCase() === 'DESC') {
            orderDirection = 'DESC';
        }

        const data = await Cuti.findAll({
            order: [[sortColumn, orderDirection]] 
        });

        if (data.length === 0) {
            return res.status(404).json({ message: 'Tidak ada data cuti.' });
        }

        const result = {
            status: 200,
            message: 'Berhasil mendapatkan data cuti.',
            data: data
        };
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal mendapatkan data cuti.', error: error.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Cuti.findByPk(id)
        if (!data) {
            return res.status(404).json({ message: 'Tidak ada data cuti dengan ID tersebut.' });
        }
       
        const result = {
            status: 200,
            message: 'Data cuti berhasil ditemukan.',
            data: data
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal mendapatkan data cuti dengan ID tersebut.', error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const body = req.body

        const cekKaryawan = await Karyawan.findByPk(body.nomor_induk)

        if (!cekKaryawan) {
            return res.status(404).json({ message: 'Tidak ada data karyawan dengan nomor induk tersebut.' });
        }

        const data = await Cuti.create(body)

        const result = {
            status: 201,
            message: 'Data cuti berhasil ditambahkan.',
            data: data
        };

        res.json(result);
    } catch (error) {   
        res.status(500).json({ message: 'Gagal menambahkan data cuti.', error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        const data = await Cuti.findByPk(id)

        if (!data) {
            return res.status(404).json({ message: 'Tidak ada data cuti dengan ID tersebut.' });
        }

        await data.update(body)

        const result = {
            status: 200,
            message: 'Data cuti berhasil diupdate.',
            data: data
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal mengupdate data cuti.', error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Cuti.findByPk(id)

        if (!data) {
            return res.status(404).json({ message: 'Tidak ada data cuti dengan ID tersebut.' });
        }

        await data.destroy()

        const result = {
            status: 200,
            message: 'Data cuti berhasil dihapus.',
            data: data
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus data cuti.', error: error.message });
    }
}