'use strict'

/**
 * 要想访问 /user 这个路由，一个是可以在app.js中直接通过
 *      app.get('/user', async c => {
 *          //...
 *      })
 *  的方式添加路由。
 * 
 * 另一种方式就是创建一个user.js文件。
 * 
 * 在user目录中，存在文件会映射为/user/info等形式，不会存在单纯的/user路由。
 * 
 */

class test {

  constructor () {
    
  }

  async list (c) {
    let tests = c.service.model.test

    let mlist = await tests.list()

    c.send(mlist)
  }

  async delete (c) {
    let deltest = c.service.model.test

    let delist = await deltest.delete(c.param.id)

    c.send(delist)
  }

}

module.exports = test
