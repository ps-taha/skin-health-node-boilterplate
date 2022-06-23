import { Router } from 'express';

import sampleRoute from './sample.route';
import config from '../../config/config';

const router = Router();
const defaultRoutes = [
  {
    path: '/sample',
    route: sampleRoute,
  },
];

const devRoutes: any = [
  // routes available only in development mode
];

defaultRoutes.forEach((route: any) => {
  router.use(route.path, route.route);
});

if (config.env === 'development') {
  devRoutes.forEach((route: any) => {
    router.use(route.path, route.route);
  });
}

export default router;
