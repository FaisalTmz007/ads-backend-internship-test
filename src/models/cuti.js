'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cuti.belongsTo(models.Karyawan, { foreignKey: 'nomor_induk', targetKey: 'nomor_induk', as: 'karyawans' })
    }
  }
  Cuti.init({
    nomor_induk: DataTypes.STRING,
    tanggal_cuti: DataTypes.DATE,
    lama_cuti: DataTypes.INTEGER,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cuti',
  });
  return Cuti;
};