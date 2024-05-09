import { User } from '../models/user.js';

export const getAllUsers = async (): Promise<User[]> => {
  return await User.findAll();
};

export const createUser = async (
  username: string,
  email: string,
  password: string,
): Promise<User> => {
  return await User.create({ username, email, password });
};
