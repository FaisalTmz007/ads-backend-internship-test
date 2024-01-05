'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cutis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomor_induk: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'karyawans',
          key: 'nomor_induk'
        }
      },
      tanggal_cuti: {
        allowNull: false,
        type: Sequelize.DATE
      },
      lama_cuti: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      keterangan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cutis');
  }
};