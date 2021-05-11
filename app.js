const express = require('express');
const cors = require('cors');

//Import router;
const userRouter = require('./routes/user.router');
const postRouter = require('./routes/post.router');
const commentRouter = require('./routes/comment.router');

const app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
  });
// const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// app.use(morgan('combined', { stream: accessLogStream }));

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Protect from CORS error
app.use(cors());

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);


app.listen( port, () => {
    // console.log('serveur start');
});

// module.exports = app;