import express from 'express'
import user from '../controllers';

const router = express.Router({ mergeParams: true });

router.get('/', user.getAllUsers);
router.post('/', user.createUser);
router.patch('/:id', user.updateUser);
router.get('/:id', user.getUserInfo);

export default router;
