import express from 'express'
import userController from '../controllers';

const router = express.Router({ mergeParams: true });

router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);

export default router;
