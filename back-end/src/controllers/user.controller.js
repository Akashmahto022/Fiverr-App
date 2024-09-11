import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { apiError } from "../utils/apiError.js";

const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  console.log(user)

    if (req.userId !== user._id.toString()) {
      return next(apiError(403, "you can delete only your account"))
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted Account successfully")
};

const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
    res.status(200).send(user)
};



export { deleteUser, getUser };

