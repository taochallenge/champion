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

class centence {

  constructor () {
    
  }

  async list (c) {
    let centences = c.service.model.centence

    let clist = await centences.list()

    c.send(clist)
  }
  async get(c) {
    let centences = c.service.model.centence

    let clist = await centences.get(c.param.id)

    c.send(clist)
  }
  async post(c) {
    let data = JSON.parse(c.body);

    let incentence = c.service.model.centence

    let clist = await incentence.insert(data)

    c.send(clist)

  }  
  async delete(c) {
    let delcentence = c.service.model.centence

    let delist = await delcentence.delete(c.param.id)

    c.send(delist)
  }
}

module.exports = centence
