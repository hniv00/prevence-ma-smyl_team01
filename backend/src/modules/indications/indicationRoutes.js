import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  indicationController,
  newIndicationController,
  deleteIndicationController,
  updateIndicationController,
  indicationTreatmentController,
  indicationFanamnesisController,
  indicationLifestyleController,
} from './indicationController';

const router = expressAsyncAwait(Router());
router.get('/list/', indicationController);
router.get('/treatment/', indicationTreatmentController);
router.get('/fanamnesis/', indicationFanamnesisController);
router.get('/lifestyle/', indicationLifestyleController);
router.post('/new/', newIndicationController);
router.post('/delete/:id', deleteIndicationController);
router.post('/update/:id', updateIndicationController);

export default router;
