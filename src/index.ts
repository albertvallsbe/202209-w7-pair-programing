import connectDatabase from "./database";
import startServer from "./server";

const urlDb = process.env.MONGO_URL;
const port = process.env.PORT;

await connectDatabase(urlDb);
await startServer(+port);
