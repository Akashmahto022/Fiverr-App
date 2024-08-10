import { User } from "./../models/user.model.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = User({
      ...req.body,
      password: hash,
    });
    console.log("till done")
    await newUser.save();
    res.status(200).send("created successfuly");
  } catch (error) {
    res.status(500).send("error while registering the user", error);
  }
};

const login = async (req, res) => {
  try {
        const user = await User.findOne({username:req.body.username})
        if (!user) {
            return res.status(404).send("user not found with this username")
        }

        const isCorrectPassword = bcrypt.compareSync(req.body.password, user.password)
        if (!isCorrectPassword) {
            return res.status(404).send("password is not coorect with this username")
        }
        const {password, ...info} = user._doc;
        res.status(200).send(info)


  } catch (error) {
    res.status(500).send("error while login the user", error);
  }
};

const logout = async (req, res) => {
  try {
  } catch (error) {}
};

export { register, login, logout };
