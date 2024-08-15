import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//  this function for the hash the password wiht using bcrypt library
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password == (await bcrypt.hash(this.password, 10));
  next();
});


//  this function for the check the password is correct or not wiht using bcrypt library
userSchema.methods.isPasswordCorrect = async (password) => {
  return await bcrypt.compare(password, this.password);
};


//  this function for creating the access token with using the jsonwebtoken
userSchema.methods.generateAccessToekn = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      isSeller: this.isSeller,
    },
    process.env.JWT_KEY_FOR_ACCESS_TOEKN,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

//  this function for creating the refresh token with using the jsonwebtoken
userSchema.methods.generateRefreshToekn = function () {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_KEY_FOR_REFRESH_TOEKN,
    {
      expiresIn: process.env.REFRESH_TOEKN_EXPIRY,
    }
  );
};


export const User = mongoose.model("User", userSchema);
