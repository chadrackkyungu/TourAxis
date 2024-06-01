import express from 'express'
import user from '../controllers';
import taskRoutes from './taskRoute';

const router = express.Router({ mergeParams: true });

// Users
router.get('/', user.getAllUsers);
router.post('/', user.createUser);
router.patch('/:id', user.updateUser);
router.get('/:id', user.getUserInfo);
router.use('/:user_id/tasks', taskRoutes);

export default router;
