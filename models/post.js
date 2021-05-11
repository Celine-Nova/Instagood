'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Je veux mettre un UserId à Post.
      Post.belongsTo(models.User);
      // Un Post à plusieurs commentaires
      Post.hasMany(models.Comment);
      // Relation ManyToMany entre post et hashtags
      Post.belongsToMany(models.Hashtag, { through: models.PostHashtag})
      Post.hasMany(models.PostHashtag);
    }
  };
  Post.init({
    picture: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    number_likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};