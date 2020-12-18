'use strict'

class registeruser {

  async post(c) {
    let data = JSON.parse(c.body);

    let inuser = c.service.model.registeruser

    let ulist = await inuser.insert(data)

    c.send(ulist)

  }
  

}

module.exports = registeruser