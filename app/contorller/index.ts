import { Context } from "koa";
import logger from '../logger'
import UserService from "../service/UserService";
class IndexController {
    async index (ctx:Context) {
        logger.info('msg',ctx)
        const user =await UserService.getUser()
        ctx.body ={ arr:['a','b',"c",'d','q123'], user}
    }
}

export default new IndexController()