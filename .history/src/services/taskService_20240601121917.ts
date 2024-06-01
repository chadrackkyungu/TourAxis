import taskModel from '../models/taskModel';
import userModel from '../models/userModel';
import { ITask, ITaskUpdate } from '../types/taskTypes';

export const createTaskService = async (userId: string, taskDetails: ITask) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const task = new taskModel(taskDetails);
    await task.save();
    return task;
};

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

export const deleteTaskService = async (userId: string, taskId: string) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const task = await taskModel.findByIdAndDelete(taskId);
    if (!task) {
        throw new Error('Task not found');
    }

    return task;
};

export const getTaskService = async (userId: string, taskId: string) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const task = await taskModel.findById(taskId);
    if (!task) {
        throw new Error('Task not found');
    }

    return task;
};

export const listTasksService = async (userId: string) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const tasks = await taskModel.find({ user: userId });
    return tasks;
};
