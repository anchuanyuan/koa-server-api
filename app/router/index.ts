import  KoaRouter from 'koa-router'

import IndexController from '../contorller/index'
const router = new KoaRouter({prefix:'/api'})

router.get('/', IndexController.index )

export default router
