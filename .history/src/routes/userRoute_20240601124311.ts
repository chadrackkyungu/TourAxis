import express from 'express'
import user from '../controllers';
import task from '../controllers';

const router = express.Router({ mergeParams: true });

// Users
router.get('/', user.getAllUsers);
router.post('/', user.createUser);
router.patch('/:id', user.updateUser);
router.get('/:id', user.getUserInfo);

// Tasks
router.post('/:user_id/tasks', task.createTask);
router.put('/:user_id/tasks/:task_id', task.updateTask);
router.delete('/:user_id/tasks/:task_id', task.deleteTask);
router.get('/:user_id/tasks/:task_id', task.getTaskInfo);
router.get('/:user_id/tasks', task.listTasks);

export default router;
