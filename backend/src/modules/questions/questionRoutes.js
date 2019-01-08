import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  questionController,
  newQuestionController,
  deleteQuestionController,
  updateQuestionController,
} from './questionController';

const router = expressAsyncAwait(Router());
router.get('/list/', questionController);
router.post('/new/', newQuestionController);
router.post('/delete/:id', deleteQuestionController);
router.post('/update/:id', updateQuestionController);

export default router;
