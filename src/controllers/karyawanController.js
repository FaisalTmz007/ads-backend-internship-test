const { Karyawan, Cuti } = require('../models/index')

exports.findAll = async (req, res) => {
    try {
        const { sortBy, sortOrder } = req.query;
        let sortColumn = 'createdAt'
        let orderDirection = 'ASC';

        if (sortBy === 'nama' || sortBy ==='tanggal_lahir'){
            sortColumn = sortBy
        }

        if (sortOrder && sortOrder.toUpperCase() === 'DESC') {
            orderDirection = 'DESC';
        }

        const data = await Karyawan.findAll({
            order: [[sortColumn, orderDirection]] 
        });

        if (data.length === 0) {
            return res.status(404).json({ message: 'Tidak ada data karyawan.' });
        }

        const result = {
            status: 200,
            message: 'Berhasil mendapatkan data karyawan.',
            data: data
        };
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal mendapatkan data karyawan.', error: error.message });
    }
};

exports.findById = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Karyawan.findByPk(id, {
            include: [
                { model: Cuti, as: 'cutis' }
            ]
        })
        if (!data) {
            return res.status(404).json({ message: 'Tidak ada data karyawan dengan ID tersebut.' });
        }
       
        const result = {
            status: 200,
            message: 'Data karyawan berhasil ditemukan.',
            data: data
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal mendapatkan data karyawan dengan ID tersebut.', error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const body = req.body

        const cekKaryawan = await Karyawan.findByPk(body.nomor_induk)

        if(cekKaryawan) {
            return res.status(404).json({ message: 'Nomor induk sudah terdaftar.' });
        }

        const data = await Karyawan.create(body)

        const result = {
            status: 201,
            message: 'Data karyawan berhasil ditambahkan.',
            data: data
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal Membuat data Karyawan', error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        const data = await Karyawan.findByPk(id)

        if (!data) {
            return res.status(404).json({ message: 'Tidak ada data karyawan dengan ID tersebut.' });
        }

        await data.update(body)

        const result = {
            status: 200,
            message: 'Data karyawan berhasil diupdate.',
            data: data
        };
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal update data karyawan.', error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Karyawan.findByPk(id)
        if (!data) {
            return res.status(404).json({ message: 'Tidak ada data karyawan dengan ID tersebut.' });
        }

        await data.destroy()
        
        const result = {
            status: 204,
            message: 'Data karyawan berhasil dihapus.',
            data: data
        };
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus data karyawan.', error: error.message });
    }
};
