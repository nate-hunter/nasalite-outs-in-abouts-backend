const express = require('express');
const mongoose = require('mongoose');

const spotRoute = require('./routes/spots');
const userRoute = require('./routes/users');

require('dotenv').config();

const app = express();

app.use(express.json());  // this allows us to use anything as a JSON

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true })
  .then(() => console.log('\t-> MongoDB connected'))
  .catch(error => console.log('There was an error connecting to MongoDB', error));

app.use('/api/v1/spots', spotRoute);
app.use('/api/v1/users', userRoute);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`\n\t-> Server running on Port: ${PORT}`)
});
