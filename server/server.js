const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const blogRouter = require('./routes/blogs');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/blogs', blogRouter);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Step-2 : MongoDB database connection established successfully...');
  console.log('\n');
});

app.listen(port, () => {
  console.log('\n');
  console.log(`Step-1 : Server is running on port: ${port}`);
});
