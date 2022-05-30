const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");

const userCtrl = {
  register: asyncHandler(async (req, res) => {
    const { name, email, password, image, role } = req.body;

    if (!name || !email || !password || !role) {
      res.status(400);
      throw new Error("Please Enter all the Feilds");
    }

    const userExists = await Users.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await Users.create({
      name,
      email,
      password,
      image,
      role,
    });

    if (user) {
      res.status(201).json({
        newUser: user,
        accesstoken: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  }),

  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Please Login or Register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "Please Login or Register" });

        const accesstoken = createAccessToken({ id: user.id });

        res.json({ accesstoken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    //res.json({ user: user });
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({
        user: user,
        accesstoken: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  }),
  allUsers: asyncHandler(async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};

    const users = await Users.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
  }),
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "11m" });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

module.exports = userCtrl;
