const express = require("express");
const connectDb = require("./config/database");
const User = require("./model/user");
const app = express();

// app.use(function (req, res) {
//   res.send("hello from server");
// });
// app.use("/test", (req, res) => {
//   res.send("hello from server");
// });
// another way to call the route with get
// mongo connection

// test route
connectDb()
  .then(() => {
    console.log("connection to db is successful");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
// app.get("/", (req, res) => {
//   res.send("Server is running");
// });
app.get("/test", (req, res) => {
  res.send("ok google");
});
//now we will create a post to save data in db
app.post("/signup", async (req, res) => {
  const user = {
    firstName: "test1",
    lastName: "jais",
    age: 23,
  };
  //i am creating a new user with this data or creating new instance of User model
  const newUser = new User(user);
  try {
    await newUser.save(); // this will return a promise
    res.send("user added successfully");
  } catch (e) {
    res.status(400).send("user not added", e.message);
  }
});
