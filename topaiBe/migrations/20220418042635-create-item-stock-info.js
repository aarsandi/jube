'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemStockInfos', {
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
      warehouse: {
        type: Sequelize.STRING
      },
      rackAlphabet: {
        type: Sequelize.STRING
      },
      rackNumber: {
        type: Sequelize.STRING
      },
      statusItemStock: {
        type: Sequelize.BOOLEAN
      },
      statusItemProd: {
        type: Sequelize.BOOLEAN
      },
      distributor: {
        type: Sequelize.STRING
      },
      expiredDate: {
        type: Sequelize.DATE
      },
      minQty: {
        type: Sequelize.INTEGER
      },
      maxQty: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ItemStockInfos');
  }
};