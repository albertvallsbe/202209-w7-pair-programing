import type { NextFunction, Request, Response } from "express";
import CustomError from "../../CustomError/CustomError";
import User from "../../database/models/User";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error: unknown) {
    const newError = new CustomError(
      (error as Error).message,
      500,
      "Error creating new User"
    );
    next(newError);
  }
};

export default createUser;
