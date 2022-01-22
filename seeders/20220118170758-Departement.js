'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Departements', [
    {
      name: 'physics',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'chemistry',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'math',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'biology',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Departements', null, {});
  }
};
