const faker = require('hoaxer')
const users = [...Array(10)].map((user) => (
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    DepartementId: faker.helpers.randomize([1, 2, 3, 4]),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',users)
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};