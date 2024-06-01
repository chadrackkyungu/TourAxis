import { Router } from 'express';
import task from '../controllers';

const router = Router({ mergeParams: true });

router.post('/', task.createTask);
router.put('/:task_id', task.updateTask);
router.delete('/:task_id', task.deleteTask);
router.get('/:task_id', task.getTaskInfo);
router.get('/', task.listTasks);

export default router;
