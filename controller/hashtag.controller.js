const Hashtag = require('../models').Hashtag;
// const Post = require('../models').Post;
// J'ajoute un Hashtag
exports.hashtag_add = (req, res, next) => {
    const hashtag = req.body;

    Hashtag.create(hashtag)
    .then(hashtagCreated =>{
         res.status(201).json(hashtagCreated) 
    })
    .catch(err => console.log(err))
  }