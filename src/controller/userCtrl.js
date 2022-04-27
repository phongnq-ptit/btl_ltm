import User from "../model/User";
import token from "../services/token";
import activeUser from "../services/activeUser";
import bcrypt from "bcrypt";
import { APIfeartures } from "../lib/features";

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
            userBody.token = token;
            // link active user
            const link = `http://localhost:5000/api/active/${token}`;
            // ma hoa mat khau client gui den
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            // gan lai mk moi cho obj
            userBody.password = hashed;

            const newUser = await User(userBody);

            await newUser.save();

            // gui email sac nhan tai khoan
            await activeUser.sendMail(userBody.email, link, userBody.fullName);

            return res.status(200).json(newUser);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getAllUser: async (req, res) => {
        try {
            const features = new APIfeartures(User.find(), req.query)
                .paginating()   // phân trang
                .sorting()      // sắp xếp
                .searching()    // tìm kiếm
                .filtering();   // lọc

            const result = await Promise.allSettled([
                features.query
            ]);

            const users = result[0].status === 'fulfilled' ? result[0].value : [];

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
    },
    activeUser: async (req, res) => {
        try {
            await User.updateOne({ token: req.params.token }, { isActive: true });
            return res.send('OK');
        }
        catch (err) {
            console.log(err);
        }
    }
}

export default userCtrl;