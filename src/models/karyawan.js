'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Karyawan.hasMany(models.Cuti, { sourceKey: 'nomor_induk', foreignKey: 'nomor_induk', as: 'cutis' })
    }
  }
  Karyawan.init({
    nomor_induk: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false
    },
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    tanggal_bergabung: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Karyawan',
  });
  return Karyawan;
};