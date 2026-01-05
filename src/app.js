const express = require("express");
const connectDb = require("./config/database");
const User = require("./model/user");
const app = express();

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

//now we will create a post to save data in db
app.use(express.json()); // this will be applicable to all route
app.post("/signup", async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save(); // this will return a promise
    res.send("user added successfully");
  } catch (e) {
    res.status(400).send("user not added", e.message);
  }
});

app.get("/feed", async (req, res) => {
  const userFirstName = req.body.firstName1;
  const Allusers = await User.find({ firstName: userFirstName }); // if we pass blank obj then it will give all the data
  try {
    res.send(Allusers);
  } catch (err) {
    res.status(404).send("User not found");
  }
});

app.delete("/deleteUser", async (req, res) => {
  const userId = req.body.id;
  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    res.send("user deleted successfully");
  } catch (err) {
    res.status(404).send("User not found");
  }
});

app.patch("/updateUser", async (req, res) => {
  const userId = req.body.id; //in req body id should be the name
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("user updated successfully");
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});
