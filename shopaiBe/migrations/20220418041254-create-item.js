'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ItemCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ItemCategories",
          key: "id",
        },
      },
      itemCode: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      itemName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      itemDesc: {
        type: Sequelize.TEXT
      },
      fileImg: {
        type: Sequelize.STRING
      },
      penjualanDibulatkan: {
        type: Sequelize.BOOLEAN
      },
      penjualanSesuaiTrans: {
        type: Sequelize.BOOLEAN
      },
      pemakaianDibulatkan: {
        type: Sequelize.BOOLEAN
      },
      pemakaianSesuaiTrans: {
        type: Sequelize.BOOLEAN
      },
      tipeTransaksi: {
        type: Sequelize.INTEGER
      },
      statusItem: {
        type: Sequelize.INTEGER
      },
      productLine: {
        type: Sequelize.STRING
      },
      markup: {
        type: Sequelize.INTEGER
      },
      het: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('Items');
  }
};