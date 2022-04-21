import User from "../model/User";
import bcrypt from "bcrypt";

const userCtrl = {
    userLogin: async (req, res) => {
        try {
            const user = await User.findOne({
                username: req.body.username
            });

            if (!user) {
                return res.status(404).json("Tai khoan sai hoac khong ton tai!");
            }

            const validPassword = await bcrypt.compare(
                req.body.password, // mat khau cua client gui den
                user.password // mat khau da duoc ma hoa trong csdl
            );

            if (!validPassword) {
                return res.status(404).json("Mat khau sai hoac khong ton tai!")
            }

            if (user && validPassword) {
                return res.status(200).json(user);
            }

        } catch (error) {
            return res.status(500).json(error);
        }
    },
    userRegister: async (req, res) => {
        try {
            const userBody = req.body;

            // ma hoa mat khau client gui den
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            userBody.password = hashed;

            const newUser = await User(userBody);

            await newUser.save();

            return res.status(200).json(newUser);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getAllUser: async (req, res) => {
        try {
            const users = await User.find();

            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);

            if (!user) {
                return res.status(404).json("Nguoi dung khong ton tai!");
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default userCtrl;