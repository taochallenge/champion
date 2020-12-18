'use strict'

class dbinfo {
  constructor () {

  }

  async list (c) {

    let muser = c.service.model.user

    let ulist = await muser.list()

    c.send(ulist)

  }

}

module.exports = dbinfo
