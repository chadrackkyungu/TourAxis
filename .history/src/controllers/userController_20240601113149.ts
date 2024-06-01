import { Request, Response, NextFunction } from 'express';
import { createUserService } from '../services/userService';
import { sendResponse } from '../utils/sendResponse';
import shortUrlModel from '../models/userModel';

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

//******************************** Redirect to the Url ********************************
export const redirectToOriginalUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { shortId } = req.params;
        const shortUrl = await shortUrlModel.findOne({ shortId });

        if (!shortUrl) {
            return sendResponse(res, 404, {
                status: 'fail',
                message: 'URL not found',
            });
        }

        return res.redirect(shortUrl.originalUrl);
    } catch (error) {
        next(error);
    }
};