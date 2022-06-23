import { Router } from 'express';
import validate from '../../middlewares/validate';
import defineService from '../../middlewares/defineService';
import validation from '../../validations';
import controller from '../../controllers';

const router = Router();
router.route('/').get(validate(validation.getSampleData), defineService, controller.getSampleData);

export default router;
