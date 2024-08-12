import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user)

  const token = req.cookies.accessToken;
  console.log(token)

  if (!token) {
    return res.status(401).send("you are not authentication!");
    console.log("you don't have any token")
  }

  jwt.verify(token,process.env.JWT_KEY, async (err, payload) => {
    if (payload.id !== user._id.toString()) {
      return res.status(403).send("you can delete only your account");
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted Account successfully")
  });
};

export { deleteUser };
