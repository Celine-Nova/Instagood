const Comment = require('../models').Comment;

// J'ajoute un commentaire
exports.comment_add = (req, res, next) => {
    const comment = req.body;
    Comment.create(comment)
    .then(CommentCreated => {
          res.status(201).json(CommentCreated)  
    })
    .catch(err => console.log(err))
  }