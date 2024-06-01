import { Request, Response, NextFunction } from 'express';
import { createUserService } from '../services/userService';
import { sendResponse } from '../utils/sendResponse';

//******************************** Create user ********************************
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

