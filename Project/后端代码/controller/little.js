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

class little {

  constructor () {
    
  }

  async list (c) {
    let littles = c.service.model.little

    let llist = await littles.list()

    c.send(llist)
  }

  async get (c) {
    let littles = c.service.model.little

    let llist = await littles.get(c)

    c.send(llist)
  }

  async post(c) {
    let data = JSON.parse(c.body);

    let inlittle = c.service.model.little

    let llist = await inlittle.insert(data)

    c.send(llist)

  }
  async delete(c) {
    let delittle = c.service.model.little

    let delist = await delittle.delete(c.param.id)

    c.send(delist)
  }
}

module.exports = little
