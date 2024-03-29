const mongoose = require("mongoose");

const connectDatabase = (callback) => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`MongoDB connected with server: ${mongoose.connection.host}`);
      // Invoke the callback to signal that the database connection is successful
      callback();
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB: ${error.message}`);
    });
};

module.exports = connectDatabase;
