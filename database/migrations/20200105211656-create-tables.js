'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* 
    Using Promise.all without transactions would cause issues if some of the queries are rejected. 
    It is safe to use transactions so that all operations would be executed successfully or none of the changes would be made. 
    */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('Exemplo',
          {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
            },
            name: {
              allowNull: false,
              type: Sequelize.STRING,
            },
            email: {
              allowNull: false,
              type: Sequelize.STRING,
            },
            password: {
              allowNull: false,
              type: Sequelize.STRING,
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
            },
          }, { transaction: t }
        )
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.dropTable('Exemplo', { transaction: t })
      ])
    });
  }
};
