const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO)
    .then((data) => {
      console.log(`mongo db is connected: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
