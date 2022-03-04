'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable( 'Books', { 
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: { 
        allowNull: false,
        type: Sequelize.STRING
      },
      author: { 
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantity: { 
        allowNull: true,
        type: Sequelize.STRING,
        field: 'page_quantity',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at', 
      }
    });   
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
