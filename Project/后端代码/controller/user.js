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

class user {


  async list(c) {
    let users = c.service.model.user

    let ulist = await users.list()

    c.send(ulist)
  }

  async get(c) {
    let users = c.service.model.user

    let ulist = await users.get(c)

    c.send(ulist)
  }

  async delete(c) {
    let delusers = c.service.model.user

    let delist = await delusers.delete(c.param.id)

    c.send(delist)
  }

  async post(c) {
    let data = JSON.parse(c.body);

    let inuser = c.service.model.user

    let ulist = await inuser.insert(data)

    c.send(ulist)

  }
  

}

module.exports = user
