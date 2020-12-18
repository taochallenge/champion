'use strict'


class adminlogin {

  async get(c) {
    let users = c.service.model.adminlogin

    let ulist = await users.get(c)

    c.send(ulist)
  }
  

}

module.exports = adminlogin
