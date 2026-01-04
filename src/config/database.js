const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://jaiswalakanksha1101:Akanksha%4024@akankshacluster.zjqkhzy.mongodb.net/"
  );
};
// this mongoose.connect will return a promise so we are going to handle this promis by .then and then async await came
// connectDb()
//   .then(() => {
//     console.log("connection to db is successful");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
module.exports = connectDb;
