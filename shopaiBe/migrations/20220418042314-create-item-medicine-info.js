'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemMedicineInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ItemId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Items",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      itemCode: {
        type: Sequelize.STRING
      },
      genericName: {
        type: Sequelize.STRING
      },
      medicineCatalog: {
        type: Sequelize.STRING
      },
      mimsClassification: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.INTEGER
      },
      medicineClassification: {
        type: Sequelize.INTEGER
      },
      pregnantPatientCategory: {
        type: Sequelize.INTEGER
      },
      atfClassification: {
        type: Sequelize.STRING
      },
      formPackage: {
        type: Sequelize.INTEGER
      },
      statusVen: {
        type: Sequelize.INTEGER
      },
      medicineFunction: {
        type: Sequelize.STRING
      },
      additionalInstructions: {
        type: Sequelize.STRING
      },
      storageMethod: {
        type: Sequelize.STRING
      },
      formularium: {
        type: Sequelize.BOOLEAN
      },
      highAlertMed: {
        type: Sequelize.BOOLEAN
      },
      obatInjeksi: {
        type: Sequelize.BOOLEAN
      },
      formulariumBPJS: {
        type: Sequelize.BOOLEAN
      },
      lookALike: {
        type: Sequelize.BOOLEAN
      },
      formulariumNasional: {
        type: Sequelize.BOOLEAN
      },
      formulariumKaryawan: {
        type: Sequelize.BOOLEAN
      },
      obatLuar: {
        type: Sequelize.BOOLEAN
      },
      kontrolExpired: {
        type: Sequelize.BOOLEAN
      },
      obatGenerik: {
        type: Sequelize.BOOLEAN
      },
      obatKronis: {
        type: Sequelize.BOOLEAN
      },
      precursor: {
        type: Sequelize.BOOLEAN
      },
      obatTertentu: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('ItemMedicineInfos');
  }
};