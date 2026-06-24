import User from "../models/User.js";

export const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

export const getUsers = async () => {
  return User.findAll();
};

export const getUserById = async (id) => {
  return User.findByPk(id);
};

export const updateUser = async (id, userData) => {
  return User.update(userData, { where: { id } });
};

export const deleteUser = async (id) => {
  return User.destroy({ where: { id } });
};
