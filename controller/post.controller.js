const Post = require('../models').Post;
// J'ajoute un Post
exports.post_add = (req, res, next) => {
    const post = req.body;
    Post.create(post)
    .then(postCreated => {
          res.status(201).json(postCreated)
    .then(PostCreated => res.status(201).json(PostCreated))
    .catch(err => console.log(err))
  
    })
    .catch(err => console.log(err))
  }