import express from 'express'
import { login, logout, signup, getUsers } from '../controllers/authController.js';
import { get } from 'http';
import { protectRoute } from '../middlewares/protectroutes.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout',logout)
router.get('/users', protectRoute, getUsers)

export default router;