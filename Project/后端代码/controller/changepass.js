'use strict'

class changepass {

  async post(c) {
    let data = JSON.parse(c.body);

    let updatepass = c.service.model.changepass

    let ulist = await updatepass.update(data)

    c.send(ulist)

  }
  

}

module.exports = changepass