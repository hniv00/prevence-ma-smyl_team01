import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  eventController,
  newEventController,
  deleteEventController,
  updateEventController,
} from './eventController';

const router = expressAsyncAwait(Router());
router.get('/list/', eventController);
router.post('/new/', newEventController);
router.post('/delete/:id', deleteEventController);
router.post('/update/:id', updateEventController);

export default router;
