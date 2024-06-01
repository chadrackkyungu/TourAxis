import { Request, Response, NextFunction } from 'express';
import taskService from '../services';
import { sendResponse } from '../utils/sendResponse';
import { ITask, ITaskUpdate } from '../types/taskTypes';

//******************************** Create task ********************************
export const createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.user_id;
        const taskDetails: ITask = req.body;

        console.log("res: ", userId)
        console.log("res: ", taskDetails)

        const newTask = await taskService.createTaskService(userId, taskDetails);

        sendResponse(res, 201, {
            status: 'success',
            message: 'Task created successfully',
            data: newTask,
        });
    } catch (error) {
        next(error);
    }
};

//******************************** Update task ********************************
export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id, task_id } = req.params;
        const taskDetails: ITaskUpdate = req.body;
        const updatedTask = await taskService.updateTaskService(user_id, task_id, taskDetails);

        sendResponse(res, 200, {
            status: 'success',
            message: 'Task updated successfully',
            data: updatedTask,
        });
    } catch (error) {
        next(error);
    }
};

//******************************** Delete task ********************************
export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id, task_id } = req.params;
        await taskService.deleteTaskService(user_id, task_id);

        sendResponse(res, 200, {
            status: 'success',
            message: 'Task deleted successfully',
        });
    } catch (error) {
        next(error);
    }
};

//******************************** Get task info ********************************
export const getTaskInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id, task_id } = req.params;
        const task = await taskService.getTaskService(user_id, task_id);

        sendResponse(res, 200, {
            status: 'success',
            message: 'Task retrieved successfully',
            data: task,
        });
    } catch (error) {
        next(error);
    }
};

//******************************** List all tasks ********************************
export const listTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.user_id;
        const tasks = await taskService.listTasksService(userId);

        sendResponse(res, 200, {
            status: 'success',
            message: 'Tasks retrieved successfully',
            data: tasks,
        });
    } catch (error) {
        next(error);
    }
};
