import express from 'express'
import userController from '../controllers';

const router = express.Router({ mergeParams: true });

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.get('/:id', userController.getUserInfo);

export default router;
