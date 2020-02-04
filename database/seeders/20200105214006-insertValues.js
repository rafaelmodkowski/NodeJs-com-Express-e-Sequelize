'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* 
    Using Promise.all without transactions would cause issues if some of the queries are rejected. 
    It is safe to use transactions so that all operations would be executed successfully or none of the changes would be made. 
    */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkInsert('Exemplo', [
          {
            name: 'John Doe',
            email: 'test@medium.com',
            password: '9ff7b641722c30acdc058f2499d97dd8',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ], { transaction: t })
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkDelete('Exemplo', null, { transaction: t })
      ])
    });
  }
};