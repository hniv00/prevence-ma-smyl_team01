import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  diagPartnerController,
  newDiagPartnerController,
  deleteDiagPartnerController,
  updateDiagPartnerController,
} from './diagPartnerController';

const router = expressAsyncAwait(Router());
router.get('/list/:id', diagPartnerController);
router.post('/new/', newDiagPartnerController);
router.post('/delete/:id', deleteDiagPartnerController);
router.post('/update/:id', updateDiagPartnerController);

export default router;
