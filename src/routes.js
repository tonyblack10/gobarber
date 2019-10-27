import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Tony Costa',
    email: 'tony@email.com',
    password_hash: '12345442132',
  });

  return res.json(user);
});

export default routes;
