import { Context } from "koa";

class IndexController {
    index (ctx:Context) {
        ctx.body = ['a','b',"c",'d','q123']
    }
}

export default new IndexController()