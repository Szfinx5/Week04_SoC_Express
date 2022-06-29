import { Router } from "express";
const router = Router();
import { users } from "../libs/users.js";
import {
  getUsers,
  getUserByID,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "../models/users.js";

//Get all users
router.get("/", function (req, res) {
  res.json(getUsers());
});

//Get user by id
router.get("/:id", function (req, res) {
  const id = req.params.id;
  res.json(getUserByID(id));
});

//Create new user
router.post("/", function (req, res) {
  const body = req.body;
  res.json(createUser(body));
});

//Update user by id
router.put("/:id", function (req, res) {
  const id = req.params.id;
  const body = req.body;
  res.json(updateUserByID(id, body));
});

//Delete user by id
router.delete("/:id", function (req, res) {
  const id = req.params.id;
  res.json(deleteUserByID(id));
});

export { router };
