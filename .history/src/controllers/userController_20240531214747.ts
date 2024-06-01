import { Request, Response, NextFunction } from 'express';
import { createShortUrlService } from '../services/shortUrlService';
import { sendResponse } from '../utils/sendResponse';
import shortUrlModel from '../models/shortUrlModel';
import validator from 'validator';

//******************************** Create short Url ********************************
export const createShortUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { url } = req.body;

        if (!validator.isURL(url)) {
            return sendResponse(res, 400, {
                status: 'fail',
                message: 'Invalid URL provided',
            });
        }

        const shortUrl = await createShortUrlService(url);

        sendResponse(res, 200, {
            status: 'success',
            message: 'URL shortened successfully created',
            data: shortUrl,
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