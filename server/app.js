const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");

const PORT = process.env.PORT || 5000;
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(User.createStrategy());
// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, {
//       id: user.id,
//       username: user.username,
//       picture: user.picture,
//     });
//   });
// });

// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: "http://localhost:5000/auth/google/callback",
//       userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );

app.use("/auth", authRoutes);
app.use("/contact", contactRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
