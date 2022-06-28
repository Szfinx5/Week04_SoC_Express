import express from "express";
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";
const PORT = 3000;
const app = express();

import {router} from './routes/users.js'

app.use(express.json());

app.use('/users', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
