import express from 'express';
import controller from '../controllers/user';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

router.get('/validate', controller.validateToken);

// Register route
router.post('/register', controller.register);

// Verify email route

router.post('/login', controller.login);

router.get('/get/all', controller.getAllUsers);

export = router;
