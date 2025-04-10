import express from 'express'
import { login, logout, signup, getUsers } from '../controllers/authController.js';
import { get } from 'http';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout',logout)

router.get('/users', getUsers)

export default router;