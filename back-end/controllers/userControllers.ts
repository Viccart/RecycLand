import {
  findUserByUsername,
  addUser,
  addItemToInventory,
} from "../models/userModels";
import { Request, Response, NextFunction } from "express";
import { hashPassword } from "../db/utils";

export const getUserByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.params;
  try {
    const data = await findUserByUsername(username);
    if (!data) throw { status: 400, message: "400: username does not exist." };
    return res.status(200).send({ user: data });
  } catch (err) {
    next(err);
  }
};

export const postUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const postedUser = req.body;
  postedUser.hash = hashPassword(postedUser.hash);
  try {
    const data = await addUser(postedUser);
    return res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};

export const postItemToInventoryByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.params;
  const { body } = req;
  try {
    const data = await addItemToInventory(username, body);
    if (!data) throw { status: 400, message: "400: username does not exist." };
    return res.status(200).send({ user: data });
  } catch (err) {
    next(err);
  }
};
