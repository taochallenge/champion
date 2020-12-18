'use strict'

class comment {


  async list(c) {
    let comments = c.service.model.comment

    let clist = await comments.list()

    c.send(clist)
  }

  async get(c) {
    let comments = c.service.model.comment

    let clist = await comments.get(c)

    c.send(clist)
  }

  async post(c) {
    let data = JSON.parse(c.body);

    let comments = c.service.model.comment

    let clist = await comments.insert(data)

    c.send(clist)

  }
  async delete(c) {
    let delusers = c.service.model.comment

    let delist = await delusers.delete(c.param.id)

    c.send(delist)
  }

}

module.exports = comment
