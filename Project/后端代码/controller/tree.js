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

class tree {

  constructor () {
    
  }

  async list (c) {
    let trees = c.service.model.tree

    let tlist = await trees.list()

    c.send(tlist)
  }

  async post(c) {
    let data = JSON.parse(c.body)

    let intree = c.service.model.tree

    let tlist = await intree.insert(data)

    c.send(tlist)

  }
  async delete(c) {
    let deltree = c.service.model.tree

    let delist = await deltree.delete(c.param.id)

    c.send(delist)
  }
  async get(c) {
    let gettree = c.service.model.tree

    let delist = await gettree.get(c.param.id)

    c.send(delist)
  }
}

module.exports = tree
