import { Context } from "koa";

class IndexController {
    index (ctx:Context) {
        ctx.body = ['a','b']
    }
}

export default new IndexController()