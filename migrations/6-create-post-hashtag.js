'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostHashtags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PostId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Posts',
          key: 'id'
        },
        unique: 'PostHashtag'
      },
      HashtagId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Hashtags',
          key: 'id'
        },
        unique: 'PostHashtag'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    // Unique 
    .then(function() {
      return queryInterface.sequelize.query(
        'ALTER TABLE `PostHashtags` ADD UNIQUE `unique_index`(`PostId`, `HashtagId`)'
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PostHashtags');
  }
};