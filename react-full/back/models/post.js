
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // userId: 1
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  Post.associate = (db) => { // sequelize에서 제공함.
    db.Post.belongsTo(db.User); //post.addUser, post.getUser, post.setUser
    db.Post.hasMany(db.Comment); //post.addComments, post.getComments
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag'});
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });//post.addLikers
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
  };
  return Post;
}