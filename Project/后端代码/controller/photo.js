'use strict'

class photo {


  async list(c) {
    let photos = c.service.model.photo

    let plist = await photos.list()

    c.send(plist)
  }

  async get(c) {
    let photos = c.service.model.photo

    let plist = await photos.get(c)

    c.send(plist)
  }

  async delete(c) {
    let delphotos = c.service.model.photo

    let delist = await delphotos.delete(c.param.id)

    c.send(delist)
  }

  async post(c) {
    let data = JSON.parse(c.body);

    let inphoto = c.service.model.photo

    let plist = await inphoto.insert(data)

    c.send(plist)

  }
  

}

module.exports = photo
