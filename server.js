const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');



mongoose.connect(
  'mongodb+srv://HappyUs:happyus@cluster0.wc1ighv.mongodb.net/?retryWrites=true&w=majority'
);
console.log('DB connection successful!');


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
