import koa from "koa";
import router from "./router";
import Logger from "./middleware/logger";
import Config from "./middleware/config";

const app: koa = new koa();
const config: Config = new Config();
const logger: Logger = new Logger(config.getConfig());

app.use(logger.logger);
app.use(router);
app.listen(3000); // TODO - Stick this in a .env

console.log(`Server running on port 3000`);
