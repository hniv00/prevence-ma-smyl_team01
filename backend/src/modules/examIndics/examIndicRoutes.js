import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  examIndicController,
  newExamIndicController,
  deleteExamIndicController,
  updateExamIndicController,
} from './examIndicController';

const router = expressAsyncAwait(Router());
router.get('/list/:id', examIndicController);
router.post('/new/', newExamIndicController);
router.post('/delete/:id', deleteExamIndicController);
router.post('/update/:id', updateExamIndicController);

export default router;
