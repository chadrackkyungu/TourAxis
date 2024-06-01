// Users 
import { createUserService, updateUserService, getAllUserService, getUserService } from '../services/userService';

// Tasks
import {
    createTaskService,
    updateTaskService,
    deleteTaskService,
    getTaskService,
    listTasksService
} from '../services/taskService';

export default {

    // Users
    createUserService,
    updateUserService,
    getAllUserService,
    getUserService,

    //Tasks
    createTaskService,
    updateTaskService,
    deleteTaskService,
    getTaskService,
    listTasksService
}
