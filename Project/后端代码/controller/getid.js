'use strict'


class getid {

  async get(c) {
    let id = c.service.model.getid

    let idlist = await id.get(c)

    c.send(idlist)
  }
  

}

module.exports = getid
