import Koa from 'koa'
import router from './router'
import {Server} from 'http'
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env);


const app = new  Koa()
app.use(router.routes())

const run = (port:any):Server =>{
   return app.listen(port)
}

export default run