import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { twitterFeedController } from './twitterFeedController';

const router = expressAsyncAwait(Router());
router.get('/list/', twitterFeedController);

export default router;
