import shortUrlModel from '../models/userModel';
import shortid from 'shortid';

export const createUserService = async () => {
    let shortId = shortid.generate();
    let existingUrl = await shortUrlModel.findOne({ shortId });

    while (existingUrl) {
        shortId = shortid.generate();
        existingUrl = await shortUrlModel.findOne({ shortId });
    }

    const shortUrl = await shortUrlModel.create({ originalUrl, shortId });
    return shortUrl;
};
