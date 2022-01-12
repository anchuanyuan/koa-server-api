import Koa from 'koa'
import router from './router'
import {Server} from 'http'
import db from './db'

console.log(process.env.DB_HOST);

db()
const app = new  Koa()
app.use(router.routes())

const run = (port:any):Server =>{
   return app.listen(port)
}

export default run