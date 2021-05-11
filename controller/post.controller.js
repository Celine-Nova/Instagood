const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Hashtag = require('../models').Hashtag;
// J'ajoute un Post
exports.post_add = (req, res, next) => {
    const post = req.body;
    Post.create(post)
    .then(postCreated => {
      //     console.log(req.body.Hashtags)
      postCreated.setHashtags(req.body.Hashtags)
      .then( data => res.status(201).json(data))
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
  exports.post_list = (req, res, next) => {
      Post.findAll({
        attributes: ['id', 'picture','location','description', 'number_likes', ],
        include: [
          {
             model: Comment,
             attributes: ['id','content'],
            //  through: { attributes: []} 
          },
          {
            model: Hashtag,
            attributes: ['id','name'],
            through: { attributes: []} 
         }
          
        ]
      })
      .then( posts => res.status(200).json(posts))
      .catch(err => console.log(err))
    }
    
// Je crée les hashtag à partir de la description d'un post
  exports.hashtag_add = (req, res, next) => {
      // const description = ;
      const hashtag = req.body;
      
      Hashtag.create(hashtag)
      .then(hashtagCreated => {
            res.status(201).json(hashtagCreated)
      .then(hashtagCreated => res.status(201).json(hashtagCreated))
      .catch(err => console.log(err))
    
      })
      .catch(err => console.log(err))
    }