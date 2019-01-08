import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  diagController,
  newDiagController,
  deleteDiagController,
  updateDiagController,
} from './diagnosisController';

const router = expressAsyncAwait(Router());
router.get('/list/', diagController);
router.post('/new/', newDiagController);
router.post('/delete/:id', deleteDiagController);
router.post('/update/:id', updateDiagController);

export default router;
