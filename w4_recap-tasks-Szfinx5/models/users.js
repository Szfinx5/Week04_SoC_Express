import { users } from "../libs/users.js";

// GET ALL USERS
export function getUsers() {
  const responseObject = {
    success: true,
    payload: users,
  };
  return responseObject;
}

// GET A USER BY ID
export function getUserByID(id) {
  let userById = {};
  userById = users.filter((r) => r.id == id);
  const responseObject = {
    success: true,
    payload: userById,
  };
  return responseObject;
}

// CREATE A USER
export function createUser(newUser) {
  users.push(newUser);

  const responseObject = {
    success: true,
    payload: newUser,
  };
  return responseObject;
}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {
  for (let i = 0; i < users.length; i++) {
    if (id == users[i].id) {
      users[i] = updatedUser;
      break;
    }
  }
  const responseObject = {
    success: true,
    payload: updatedUser,
  };
  return responseObject;
}

// DELETE A USER BY ID
export function deleteUserByID(id) {
  let deletedUser = users.filter((r) => r.id == id);

  for (let i = 0; i < users.length; i++) {
    if (id == users[i].id) {
      users.splice(i, 1);
      break;
    }
  }

  console.log(deletedUser);
  const responseObject = {
    success: true,
    payload: `User ${deletedUser.params.id} is deleted`,
  };
  return responseObject;
}
