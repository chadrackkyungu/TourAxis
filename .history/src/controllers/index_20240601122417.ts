// Users 
import { createUser, updateUser, getAllUsers, getUserInfo } from '../controllers/userController';

// Tasks
import { createTask, updateTask, deleteTask, getTaskInfo, listTasks } from '../controllers/taskController';

export default {

    //Users 
    createUser,
    updateUser,
    getAllUsers,
    getUserInfo,

    //Tasks
    createTask,
    updateTask,
    deleteTask,
    getTaskInfo,
    listTasks
}
