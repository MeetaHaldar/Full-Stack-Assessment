const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
// const passport = require("passport");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(passport.initialize());
app.use(cors());

const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");

app.use("/api/auth", authRoutes);
app.use("/contact", contactRoutes);
app.get("/", (req, res) => {
  res.send("hello there");
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.on("open", () => console.log("Connected to MongoDB"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
