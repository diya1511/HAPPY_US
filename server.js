const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const postController = require('./controllers/postController');
const app = express();
const userModel = require('./models/userModel');
const postModel = require('./models/postModel');
const { users, posts } = require('./data/index');
dotenv.config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
console.log('DB connection successful!');

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null)
//   }
// });
const upload = multer({ des: 'public/img/users' });
app.post('/posts', upload.single('picture'), postController.createPost);
// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/posts', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
  //Add Data one time
  userModel.insertMany(users);
  postModel.insertMany(posts);
});
