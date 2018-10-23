import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {DiagnosisController} from './diagnosisController';

const diagnosisController = new DiagnosisController;

const router = expressAsyncAwait(Router());
router.get('/', (req, res) => {diagnosisController.getAll(res)});
router.get('/:id', diagnosisController.getById);
router.get('/:::', diagnosisController.search);

export default router;