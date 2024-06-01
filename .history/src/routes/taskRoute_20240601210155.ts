import { Router } from 'express';
import task from '../controllers';

const router = Router({ mergeParams: true });

router.post('/tasks', task.createTask);
router.put('/tasks/:task_id', task.updateTask);
router.delete('/tasks/:task_id', task.deleteTask);
router.get('/:task_id', task.getTaskInfo);
router.get('/', task.listTasks);

export default router;
