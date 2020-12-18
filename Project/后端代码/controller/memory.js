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

class memory {

  constructor () {
    
  }

  async list (c) {
    let memories = c.service.model.memory

    let mlist = await memories.list()

    c.send(mlist)
  }

  async delete (c) {
    let delmemory = c.service.model.memory

    let delist = await delmemory.delete(c.param.id)

    c.send(delist)
  }

  async post(c) {
    let data = JSON.parse(c.body)

    let inmemory = c.service.model.memory

    let mlist = await inmemory.insert(data)

    c.send(mlist)

  }
  
}

module.exports = memory
