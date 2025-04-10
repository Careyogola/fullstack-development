import User from "../models/userModel.js";
import Notification from "../models/notificationModel.js"
import bcrypt from "bcryptjs";

export const getuserProfile = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username}).select("-password");
        if(!user) {
            return res.status(404).json({
                message: "User not found"
            })
        } 
        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"})
    }
}

export const followUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const loggedInUser = await User.findById(req.user._id);

        if(id === req.user._id.toString()){
            return res.status(400).json({
                message: "You cannot follow yourself"
            })
        }

        if(!user || !loggedInUser){
            return res.status(404).json({
                message: "User not found"
            })
        }

        const isFollowing = loggedInUser.following.includes(id);
        if(isFollowing){
            //unfollow user
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
            res.status(200).json({
                message: "Unfollowed user successfully",
            })
        } else {
            //follow user
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });

            //send notification
            const newNotification = new Notification({
                type: "follow",
                from: req.user._id,
                to: user._id,
            });
            await newNotification.save();
            res.status(200).json({message: "Followed user successfully"});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"})
        
    }
}

export const getsuggestedUsers = async (req, res) => {
    try {
        const userId = req.user._id;
        const usersFollowed = await User.findById(userId).select("following");
        const users = await User.aggregate([
            {
                $match:{
                    _id: { $ne: userId },
                }
            },
            {$sample: { size: 10 }},
        ])

        const fillteredUsers = users.filter((user) => {
            return !usersFollowed.following.includes(user._id);
        });
        const suggestedUsers = fillteredUsers.slice(0, 4);
        suggestedUsers.forEach(user => user.password = null);
        res.status(200).json(suggestedUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"})
    }
}

export const updateUserProfile = async (req, res) => {
    let { username, email, currentPassword, newPassword } = req.body;
    let { profileImage, coverImage } = req.body;
    const userId = req.user._id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        };

        if(( !currentPassword && newPassword) || (currentPassword && !newPassword)){
            return res.status(400).json({ message: "Please provide both current and new password" });
        }

        if( currentPassword && newPassword){
            const isMatch = await bcrypt.compare(currentPassword, user.password);
            if(!isMatch){
                return res.status(400).json({ message: "Current password is incorrect" });
            }
            if(newPassword.length < 7){
                return res.status(400).json({ message: "New password must be at least 7 characters long" });
            }

            const salt = bcrypt.genSalt(10);
            user.password = bcrypt.hash(newPassword, salt);
        }

        user.username = username || user.username;
        user.email = email || user.email;
        
        user = await user.save();
        user.password = null;

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

