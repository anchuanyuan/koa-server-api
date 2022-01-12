import { Context } from "koa";
import logger from '../logger'
class IndexController {
    index (ctx:Context) {
        logger.info('msg',ctx)
        ctx.body = ['a','b',"c",'d','q123']
    }
}

export default new IndexController()