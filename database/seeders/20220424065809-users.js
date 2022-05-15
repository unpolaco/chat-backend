"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        password: bcrypt.hashSync("secret", 10),
        gender: "male",
      },
      {
        firstName: "Josef",
        lastName: "K",
        email: "josefk@gmail.com",
        password: bcrypt.hashSync("strongsecret", 10),
        gender: "male",
      },
      {
        firstName: "Amelia",
        lastName: "Smiths",
        email: "ameliasmiths@gmail.com",
        password: bcrypt.hashSync("weaksecret", 10),
        gender: "female",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
