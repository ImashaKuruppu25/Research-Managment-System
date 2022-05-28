const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(cors());

// Connect to mongodb
const URI = process.env.MONGO_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Database Connection Successfull!");
  }
);

// Router
//app.use("/user", require("./routes/userRoute"));

app.use("/user", require("./routes/userRoute"));
app.use("/chat", require("./routes/chatRoutes"));
app.use("/message", require("./routes/messageRoutes"));

//Admin Routes
app.use("/admin", require("./routes/adminUserRoute"));
app.use("/marking", require("./routes/adminMarkingRoute"));
app.use("/panel", require("./routes/adminPanelRoute"));
app.use("/doc", require("./routes/adminDocumentRoute"));
app.use("/group", require("./routes/groupRoute"));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on PORT :", PORT);
});
