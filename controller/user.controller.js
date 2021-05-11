const User = require('../models').User;

exports.user_add = (req, res, next) => {
    // bcrypt.hash(req.body.password, 10, (err, hash) => {
    //     if (err) {
    //         throw err
    //     }
        let user = req.body;

        // user.password = hash;
        User.create(user)
            .then(data => res.status(201).json(data))
            .catch(err => console.log(err))
    // })
}