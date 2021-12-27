
import request from 'supertest'
import run from '../app/index'
import {Server} from 'http'
describe('http测试',()=>{
    let server: Server;
    beforeAll( ()=>{
        server = run(3000)// 创建服务
    })
    it("GET /api 请求的状态码 200 返回值 ['a','b','c','d','q123']", ()=>{
        return request(server)
        .get('/api') // 请求的路径
        .expect(200) // 请求的状态码
        .then( res =>[
           expect( res.body).toStrictEqual(['a','b',"c",'d','q123'])
        ])
    })
    afterAll( ()=>{
        server.close()// 关闭服务
    })
})