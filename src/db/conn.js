const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file
const DB = process.env.MONGO;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection established`);
  })
  .catch((err) => {
    console.log(err);
  });
