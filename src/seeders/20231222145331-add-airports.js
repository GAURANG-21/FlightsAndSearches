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

    //queryInterface helps seeder files to communicate to mysql and execute queries
    //bulkInsert to insert more than one data
    await queryInterface.bulkInsert('Airports',[
        {
          name: "Kempegowda International Airport",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mysuru Airport",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mangaluru International Airport",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Indira Gandhi International Airport",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // await queryInterface.bulkDelete('Airports',null,{});
  }
};
