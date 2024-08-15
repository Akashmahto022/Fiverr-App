import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user)

    if (req.userId !== user._id.toString()) {
      return res.status(403).send("you can delete only your account");
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted Account successfully")
};



export { deleteUser };

