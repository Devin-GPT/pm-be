import { Request, Response } from 'express';
import { getAllUsers, createUser } from '../services/userService.js';

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const newUser = await createUser(username, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};
