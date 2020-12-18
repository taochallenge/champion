'use strict'

class uploadimg {

  async post(c) {
    let data = JSON.parse(c.body);

    let inimgs = c.service.model.uploadimg

    let ulist = await inimgs.insert(data)

    c.send(ulist)

  }
  

}

module.exports = uploadimg