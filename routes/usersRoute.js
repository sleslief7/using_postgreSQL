const { Router } = require('express');
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
} = require('../controllers/usersController');

const userRouter = Router();

userRouter.get('/', getUsernames);
userRouter.get('/new', createUsernameGet);
userRouter.post('/', createUsernamePost);

module.exports = userRouter;
