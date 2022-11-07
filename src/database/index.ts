import mongoose from "mongoose";
import chalk from "chalk";
import debugCreator from "debug";

const debug = debugCreator("users:database");

const connectDatabase = async (url: string) => {
  try {
    await mongoose.connect(url, { dbName: "w7_users" });
    debug(chalk.green("Connected to database"));
  } catch (error: unknown) {
    debug(chalk.red(`You have an error: `, (error as Error).message));
  }
};

export default connectDatabase;
