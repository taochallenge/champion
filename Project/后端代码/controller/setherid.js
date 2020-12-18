'use strict'

class setherid {

  async post(c) {
    let data = JSON.parse(c.body);

    let inherid = c.service.model.setherid

    let idlist = await inherid.insert(data)

    c.send(idlist)

  }
  

}

module.exports = setherid