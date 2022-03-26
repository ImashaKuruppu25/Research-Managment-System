const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected!"))
  .catch((err) => {
    console.log(err);
  });

//Routes
app.use(express.json());
app.use(cors());

// app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is Running on PORT:5000");
});
