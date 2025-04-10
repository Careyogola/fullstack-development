import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 7,
        // maxLength: 15,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    followers: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
        }
    ],
    profileImage:{
        type: String,
        default: '',
    },
    coverImage: {
        type: String,
        default: '',
    },
    bio:{
        type: String,
        default: '',
    },
    link: {
        type: String,
        default: '',
    }
    //timestamps helps show when the user created
},{timestamps: true})


const User = mongoose.model('User', userSchema)
export default User;