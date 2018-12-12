'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flats', [{
      title: 'Lakás1',
      price: 1000000,
      floorArea: 1,
      country: 'HUN',
      zip: 6720,
      city: 'Szeged',
      street: 'Kossuth L. u.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Lakás2',
      price: 2000000,
      floorArea: 2,
      country: 'HUN',
      zip: 6720,
      city: 'Szeged',
      street: 'Petőfi S. u.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Lakás3',
      price: 3000000,
      floorArea: 3,
      country: 'HUN',
      zip: 6720,
      city: 'Szeged',
      street: 'Széchenyi. u.',
      createdAt: new Date(),
      updatedAt: new Date()

    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
