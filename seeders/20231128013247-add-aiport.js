'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
     {
        name : "Kampegoda Internation Airport",
        cityId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        name : "maysore Internation Airport",
        cityId : 4,
        createdAt : new Date(),
        updatedAt : new Date()

     },
     {
      name : "mangluru Internation Airport",
      cityId : 4,
      createdAt : new Date(),
      updatedAt : new Date()
     },
     {
      name : "delhi Internation Airport",
      cityId : 1,
      createdAt : new Date(),
      updatedAt : new Date()

     },
     {
      name : "kolkat Internation Airport",
      cityId : 7,
      createdAt : new Date(),
      updatedAt : new Date()
     },
     {
      name : "mumbai Internation Airport",
      cityId : 3,
      createdAt : new Date(),
      updatedAt : new Date()
     }
   ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
