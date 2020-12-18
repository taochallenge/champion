'use strict'


class getmemory {

  async post(c) {
    
    let data = JSON.parse(c.body)

    let memories = c.service.model.getmemory

    let mlist = await memories.get(data)

    c.send(mlist)
  }
  

}

module.exports = getmemory
