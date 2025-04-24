const express = require('express');
const path = require('path');
require('dotenv').config();
const userRouter = require('./routes/usersRoute');

const app = express();
const PORT = process.env.PORT || 3030;

// console.log(process.env);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
