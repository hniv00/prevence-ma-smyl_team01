import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  newPartnerController,
  partnerDiagController,
  deletePartnerController,
  updatePartnerController,
} from './partnerController';

const router = expressAsyncAwait(Router());
router.post('/list/', partnerDiagController);
router.post('/new/', newPartnerController);
router.post('/delete/:id', deletePartnerController);
router.post('/update/:id', updatePartnerController);

export default router;
