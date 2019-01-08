import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  diagIndicController,
  newDiagIndicController,
  deleteDiagIndicController,
  updateDiagIndicController,
} from './diagIndicController';

const router = expressAsyncAwait(Router());
router.get('/list/', diagIndicController);
router.post('/new/', newDiagIndicController);
router.post('/delete/:id', deleteDiagIndicController);
router.post('/update/:id', updateDiagIndicController);

export default router;
