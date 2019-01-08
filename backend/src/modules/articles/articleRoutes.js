import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  articleController,
  newArticleController,
  deleteArticleController,
  updateArticleController,
} from './articleController';

const router = expressAsyncAwait(Router());
router.get('/list/', articleController);
router.post('/new/', newArticleController);
router.post('/delete/:id', deleteArticleController);
router.post('/update/:id', updateArticleController);

export default router;
