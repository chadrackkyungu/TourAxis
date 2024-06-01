import express from 'express'
import { createUser } from '../controllers/userController';

const router = express.Router({ mergeParams: true });

router.post('/', createUser);

export default router;
