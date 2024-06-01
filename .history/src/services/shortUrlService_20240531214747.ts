import shortUrlModel from '../models/shortUrlModel';
import shortid from 'shortid';

export const createShortUrlService = async (originalUrl: string) => {
    let shortId = shortid.generate();
    let existingUrl = await shortUrlModel.findOne({ shortId });

    while (existingUrl) {
        shortId = shortid.generate();
        existingUrl = await shortUrlModel.findOne({ shortId });
    }

    const shortUrl = await shortUrlModel.create({ originalUrl, shortId });
    return shortUrl;
};
