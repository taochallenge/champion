'use strict'

class addmyname {

  async post(c) {
    let data = JSON.parse(c.body);

    let inuser = c.service.model.addmyname

    let ulist = await inuser.insert(data)

    c.send(ulist)

  }
  

}

module.exports = addmyname