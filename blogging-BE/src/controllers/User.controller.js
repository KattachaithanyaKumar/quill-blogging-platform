import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../services/User.service.js";

export const CreateUser = async (req, res) => {
  try {
    const user = await createUser(req.body);

    if (!user) {
      return res.status(400).json({ error: "User not created" });
    }

    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const GetUsers = async (req, res) => {
  try {
    const users = await getUsers();

    if (!users) {
      return res.status(404).json({ error: "No users found" });
    }

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const GetUserById = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
