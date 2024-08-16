import { User } from "./../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { apiError } from "../utils/apiError.js";

const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("created successfully");
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(apiError(404, "user not found"));

    const isCorrectPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isCorrectPassword) {
      return next(apiError(404, "password in not coorect"));
    }

    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY_FOR_ACCESS_TOEKN
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("user has been logged out.");
};

export { register, login, logout };
