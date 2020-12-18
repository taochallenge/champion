'use strict'


class getdiaries {

  async post(c) {
    
    let data = JSON.parse(c.body)

    let diaries = c.service.model.getdiaries

    let dlist = await diaries.get(data)

    c.send(dlist)
  }
  

}

module.exports = getdiaries
