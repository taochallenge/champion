'use strict'

class clearher {

  async post(c) {
    let data = JSON.parse(c.body);

    let clearher = c.service.model.clearher

    await clearher.update(data)

  }
  

}

module.exports = clearher