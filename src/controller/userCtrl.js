import User from "../model/User";
import activeUser from "../services/activeUser";
import bcrypt from "bcrypt";
import randtoken from 'rand-token';
import { APIfeartures } from "../lib/features";

const api = 'https://f74a-2402-9d80-273-f7b1-a46f-c2c0-8a89-a60f.ngrok.io';
const userCtrl = {
    userLogin: async(req, res) => {
        try {
            const user = await User.findOne({
                email: req.body.email
            });
            console.log(user)
            if (!user) {
                return res.send({ err: 2007 });
            }

            const validPassword = await bcrypt.compare(
                req.body.password, // mat khau cua client gui den
                user.password // mat khau da duoc ma hoa trong csdl
            );
            console.log(validPassword)
            if (!validPassword) {
                return res.send({ err: 2007 });
            }

            if (!user.isActive) {
                return res.send({ err: 2001 });
            }
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    userRegister: async(req, res) => {
        try {
            const u = await User.findOne({ email: req.body.email });
            if (u) {
                console.log(u)
                return res.send({ err: 2007 });
            }
            const userBody = req.body;
            userBody.token = randtoken.generate(20);
            // link active user
            const link = `${api}/api/active/${userBody.token}`;
            // ma hoa mat khau client gui den
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            // gan lai mk moi cho obj
            userBody.password = hashed;

            const newUser = await User(userBody);

            await newUser.save();

            // gui email sac nhan tai khoan
            await activeUser.sendMail(userBody.email, link, userBody.name);

            return res.status(200).json(newUser);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateOne: async(req, res) => {
        try {
            if (User.findOne({ email: req.body.email })) {
                return res.send({ err: 2007 });
            }
        } catch (error) {

        }
    },
    getAllUser: async(req, res) => {
        try {
            const features = new APIfeartures(User.find(), req.query)
                .paginating() // phân trang
                .sorting() // sắp xếp
                .searching() // tìm kiếm
                .filtering(); // lọc

            const result = await Promise.allSettled([
                features.query
            ]);

            const users = result[0].status === 'fulfilled' ? result[0].value : [];

            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getUser: async(req, res) => {
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
    activeUser: async(req, res) => {
        const html = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <style>
                html {
                    box-sizing: border-box;
                }
                
                *,
                *::before,
                *::after {
                    box-sizing: inherit;
                }
                
                body * {
                    margin: 0;
                    padding: 0;
                }
                
                body {
                    font: normal 100%/1.15 "Merriweather", serif;
                    background-color: #7ed0f2;
                    color: #fff;
                }
                
                .wrapper {
                    position: relative;
                    max-width: 1298px;
                    height: auto;
                    margin: 2em auto 0 auto;
                }
                /* https://www.flaticon.com/authors/vectors-market */
                /* https://www.flaticon.com/authors/icomoon */
                
                .box {
                    max-width: 70%;
                    min-height: auto;
                    margin: 0 auto;
                    padding: 1em 1em;
                    text-align: center;
                    background: url("https://www.dropbox.com/s/xq0841cp3icnuqd/flame.png?raw=1") no-repeat top 10em center/128px 128px, transparent url("https://www.dropbox.com/s/w7qqrcvhlx3pwnf/desktop-pc.png?raw=1") no-repeat top 13em center/128px 128px;
                }
                
                h1,
                p:not(:last-of-type) {
                    text-shadow: 0 0 6px #216f79;
                }
                
                h1 {
                    margin: 0 0 1rem 0;
                    font-size: 8em;
                }
                
                p {
                    margin-bottom: 0.5em;
                    font-size: 3em;
                }
                
                p:first-of-type {
                    margin-top: 4em;
                }
                
                p>a {
                    border-bottom: 1px dashed #216f79;
                    font-style: italic;
                    text-decoration: none;
                    color: #216f79;
                }
                
                p>a:hover {
                    text-shadow: 0 0 6px #216f79;
                }
                
                p img {
                    vertical-align: bottom;
                }
            </style>
            <div class="wrapper">
                <div class="box">
                    <h1>500</h1>
                    <p>Sorry, it's me, not you.</p>
                    <p>&#58;&#40;</p>
                    <p><a href="/">Let me try again!</a></p>
                </div>
            </div>
        </body>
        
        </html>`;
        try {
            const user = await User.findOne({ token: req.params.token });
            if (!user) {
                return res.send(html);
            }
            let date = new Date(user.createdAt);
            date.setMinutes(date.getMinutes() + 10)
            const date2 = new Date();

            console.log(new Date(date.getTime()) < date2.getTime())
            if (date > date2) {
                console.log("checking...")
                await User.updateOne({ token: req.params.token }, { isActive: true });
                return res.redirect('http://localhost:3006/login');
            } else {
                res.send(html);
            }

        } catch (err) {
            console.log(err);
        }
    }
}

export default userCtrl;