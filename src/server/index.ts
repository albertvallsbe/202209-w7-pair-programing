import "../loadEnviorments.js";
import chalk from "chalk";
import debugCreator from "debug";
import app from "../app.js";

const debug = debugCreator("users:server");

const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.blue(`Server listening on port: ${port}`));
      resolve(server);
    });
    server.on("error", (error: Error) => {
      debug(chalk.red(`Server Error: ${error.message}`));
      reject(error);
    });
  });

export default startServer;
