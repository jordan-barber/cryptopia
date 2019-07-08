import koaRouter from "koa-router";
import { Context } from "koa";

const router: koaRouter = new koaRouter();

router.get("/", (ctx: Context) => {
  return (ctx.body = "🏖🏝⛱ Hello Cryptopia! Your Koa TS API is running.");
});

export default router.routes();
