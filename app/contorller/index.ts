import { Context } from "koa";
import  logger from "../logger/index";

class IndexController {
    index (ctx:Context) {
    logger.info('mgs')
    logger.error('mgs')
        ctx.body = ['a','b',"c",'d','q123']
    }
}

export default new IndexController()