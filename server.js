const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
// const multer = require('multer');
dotenv.config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
console.log('DB connection successful!');

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//storage
// const storage = multer.diskStorage({
//   destination :
// });
//routes
app.use('/api/v1/auth', authRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
