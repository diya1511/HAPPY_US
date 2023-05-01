const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors');
const path = require('path');
// import { fileURLToPath } from "url";
const morgan = require('morgan');
const multer = require('multer');
const postController = require('./controllers/postController');
const app = express();
const userModel = require('./models/userModel');
const postModel = require('./models/userModel.js');
const { users, posts } = require('./data/index');
dotenv.config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
console.log('DB connection successful!');

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
app.post('/posts', upload.single('picture'), postController.createPost);
// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/posts', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
 
});
