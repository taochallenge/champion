'use strict'

class getpunch {

  async post(c) {
    let data = JSON.parse(c.body);

    let inpunch = c.service.model.getpunch

    let plist = await inpunch.get(data)

    c.send(plist)

  }

}

module.exports = getpunch