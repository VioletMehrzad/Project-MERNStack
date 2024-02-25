const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const appRoot = require("app-root-path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({
  path: appRoot + "/.env",
});

const saltRounds = 10;

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.DB_URI);

const UserModel = mongoose.model("User", {
  fullName: String,
  email: String,
  password: String,
});

app.post("/register", async (req, res) => {
  const existUser = await UserModel.findOne({ email: req.body.email });
  if (existUser)
    return res.status(409).json({
      message: "Email already exists!",
    });
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const overrideUser = {
    ...req.body,
    password: hashedPassword,
  };
  const user = new UserModel(overrideUser);
  user.save().then(() => {
    res
      .status(201)
      .json({ message: "User Created Successfully!", email: user.email });
  });
});

app.post("/login", async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user)
    return res.status(404).json({
      message: "Incorrect email or password!",
    });
  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match)
    return res.status(404).json({
      message: "Incorrect email or password!",
    });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.status(200).json({
    token,
    username: user.fullName,
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
