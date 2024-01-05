"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cutis",
      [
        {
          nomor_induk: "IP06001",
          tanggal_cuti: "2020-08-20",
          lama_cuti: 2,
          keterangan: "Acara Keluarga",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nomor_induk: "IP06001",
          tanggal_cuti: "2020-08-18",
          lama_cuti: 2,
          keterangan: "Anak Sakit",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nomor_induk: "IP06006",
          tanggal_cuti: "2020-08-19",
          lama_cuti: 1,
          keterangan: "Nenek Sakit",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nomor_induk: "IP06007",
          tanggal_cuti: "2020-08-23",
          lama_cuti: 1,
          keterangan: "Sakit",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nomor_induk: "IP06004",
          tanggal_cuti: "2020-08-29",
          lama_cuti: 5,
          keterangan: "Menikah",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nomor_induk: "IP06003",
          tanggal_cuti: "2020-08-30",
          lama_cuti: 2,
          keterangan: "Acara Keluarga",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cutis", null, {});
  },
};