
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    max: 100,
    windowMs: 15 * 60 * 1000,
    skipSuccessfulRequests: true,
    message: 'Too many requests from this IP, please try again in an hour!',
});

export default limiter;