const db = require('../db/queries');

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  if (req.query.search) {
    const searchWord = req.query.search;
    const filteredUsernames = await db.search(searchWord);
    return res.render('index', { usernames: filteredUsernames });
  }
  res.render('index', { usernames });
}

async function createUsernameGet(req, res) {
  res.render('userForm');
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect('/');
}

async function deleteAllUsernames(req, res) {
  await db.deleteAll();
  res.redirect('/');
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernames,
};
