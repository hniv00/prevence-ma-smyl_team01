import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  examDiagController,
  newExamDiagController,
  deleteExamDiagController,
  updateExamDiagController,
} from './examDiagController';

const router = expressAsyncAwait(Router());
router.get('/list/:id', examDiagController);
router.post('/new/', newExamDiagController);
router.post('/delete/:id', deleteExamDiagController);
router.post('/update/:id', updateExamDiagController);

export default router;
