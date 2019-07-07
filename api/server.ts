import koa from "koa";
import router from "./router";

const app: koa = new koa();

app.use(router);
app.listen(3000); // TODO - Stick this in a .env

console.log(`Server running on port 3000`);
