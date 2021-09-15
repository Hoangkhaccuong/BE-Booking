'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'khaccuong@gmail.com',
      password:'12345',
      firstName:'Cuong',
      lastName:'Hoang',
      address:'QB_VN',
      gender:1,
      roleId:'ok',
      phonenumber:'091221212',
      positionId:'Doctor',
      image:'1231231231231231231231232',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
