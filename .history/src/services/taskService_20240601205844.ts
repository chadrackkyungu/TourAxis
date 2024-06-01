import taskModel from '../models/taskModel';
import userModel from '../models/userModel';
import { ITask, ITaskUpdate } from '../types/taskTypes';

//******************************** Create task ********************************
export const createTaskService = async (userId: string, taskDetails: ITask) => {
    const user = await userModel.findById(userId);

    if (!user) {
        throw new Error('User not found');
    }

    const task = new taskModel({ ...taskDetails, user: userId });
    await task.save();
    return task;
};

//******************************** Update task ********************************
export const updateTaskService = async (userId: string, taskId: string, taskDetails: ITaskUpdate) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const updatedTask = await taskModel.findByIdAndUpdate(taskId, taskDetails, { new: true });
    if (!updatedTask) {
        throw new Error('Task not found');
    }
    return updatedTask;
};

//******************************** Delete task ********************************
export const deleteTaskService = async (userId: string, taskId: string) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const task = await taskModel.findOneAndDelete({ _id: taskId, user: userId });
    if (!task) {
        throw new Error('Task not found for this user');
    }

    return task;
};

//******************************** Get task info ********************************
export const getTaskService = async (userId: string, taskId: string) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const task = await taskModel.findOne({ _id: taskId, user: userId });

    if (!task) {
        throw new Error('Task not found for this user');
    }

    return task;
};

//******************************** List all tasks ********************************
export const listTasksService = async (userId: string) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return await taskModel.find({ user: userId });
};
