const express = require("express");
const app = express();
// app.use(function (req, res) {
//   res.send("hello from server");
// });
app.use("/test", (req, res) => {
  res.send("hello from server");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
