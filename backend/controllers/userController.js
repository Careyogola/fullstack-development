import User from "../models/userModel.js";

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
            res.status(200).json({
                message: "Followed user successfully",
            })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"})
        
    }
}

// export const updateUserProfile = async (req, res) => {}

