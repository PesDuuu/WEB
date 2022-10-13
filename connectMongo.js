const mongoose = require("mongoose")
const LINK = process.env.LINK
mongoose
  .connect(LINK)
  .then(() => {
    console.log("connect sucsess");
  })
  .catch(() => {
    console.log("connect fail");
  });