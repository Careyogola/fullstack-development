import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { generateTokenAndSetCookie } from '../lib/utils/generatetoken.js'

export const signup = async (req, res)=>{
    try {
        const { username, email, password } = req.body;

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({
                error:"Invalid email format."
            })
        }

        const existingUser = await User.findOne({ username });
        if(existingUser) {
            return res.status(400).json({ error: "Username is already taken." })
        }

        const existingEmail = await User.findOne({ email });
        if(existingEmail) {
            return res.status(400).json({ error: "Email already exists." })
        }

        //lets hash the password with bcrypt package

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
        })

        if(newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profileImage: newUser.profileImage,
                coverImage: newUser.coverImage,
                followers: newUser.followers,
                following: newUser.following,
            });
            
        } else {
            res.status(400).json({
                error: "Invalid user data."
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal server error."
        })
        
    }
}

export const login = async (req, res) => {
    res.json({
        data: "Youve hit login endpoint."
    })
}

export const logout = async (req, res) => {
    res.json({
        data: "Youve hit signout endpoint."
    })
}