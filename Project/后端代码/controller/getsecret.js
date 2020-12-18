'use strict'


class getsecret {

  async get(c) {
    let id = c.service.model.getsecret

    let idlist = await id.get(c)

    c.send(idlist)
  }
  

}

module.exports = getsecret
