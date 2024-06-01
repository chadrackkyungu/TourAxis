import { Request, Response, NextFunction } from 'express';
import { createUserService, listUsersService, updateUserService } from '../services/userService';
import { sendResponse } from '../utils/sendResponse';
import { IUserUpdate } from '../types/userTypes';

//******************************** Create user controller ********************************
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = await createUserService(req.body);

        sendResponse(res, 201, {
            status: 'success',
            message: 'User created successfully',
            data: newUser,
        });
    } catch (error) {
        next(error);
    }
};

//******************************** Update user controller ********************************
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;
        const userDetails: IUserUpdate = req.body;
        const updatedUser = await updateUserService(userId, userDetails);

        sendResponse(res, 200, {
            status: 'success',
            message: 'User updated successfully',
            data: updatedUser,
        });
    } catch (error) {
        next(error);
    }
};

//******************************** List all users ********************************
export const listUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await listUsersService();

        sendResponse(res, 200, {
            status: 'success',
            message: 'Users retrieved successfully',
            data: users,
        });
    } catch (error) {
        next(error);
    }
};