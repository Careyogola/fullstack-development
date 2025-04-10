import express from 'express';
import { get } from 'mongoose';
import { protectRoute } from '../middlewares/protectroutes.js';
import { getuserProfile, followUser, getsuggestedUsers, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile/:username',protectRoute, getuserProfile);
router.get('/suggested',protectRoute, getsuggestedUsers);
router.post('/follow/:id', protectRoute, followUser);
router.post('/update', protectRoute, updateUserProfile);

export default router;