const { Router } = require('express');
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernames,
} = require('../controllers/usersController');

const userRouter = Router();

userRouter.get('/', getUsernames);
userRouter.get('/new', createUsernameGet);
userRouter.post('/', createUsernamePost);
userRouter.get('/delete', deleteAllUsernames);

module.exports = userRouter;
