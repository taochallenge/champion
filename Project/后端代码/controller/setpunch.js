'use strict'

class setpunch {

  async post(c) {
    let data = JSON.parse(c.body);

    let inpunch = c.service.model.setpunch

    let plist = await inpunch.insert(data)

    c.send(plist)

  }

}

module.exports = setpunch