import express from 'express'
import { createShortUrl, redirectToOriginalUrl } from '../controllers/shortUrlController';

const router = express.Router({ mergeParams: true });

router.post('/', createShortUrl);
router.get('/:shortId', redirectToOriginalUrl);

export default router;
