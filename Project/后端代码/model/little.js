'use strict'

class little {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'little'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  model () {
    return this.db.model(this.tableName)
  }

  async insert (data) {

    let r = await this.model().insert(data)

    return r.rowCount <= 0 ? false : 1; 

  }

  async list () {

    let sql = `select * from ${this.tableName}`

    let llist = await this.pdb.query(sql)

    return llist.rows

  }
  async get (c) {

    let id = c.param.id

    let sql = `select * from ${this.tableName}${id}`

    let llist = await this.pdb.query(sql)

    return llist.rows

  }
  async delete (id) {

    let sql = `delete from ${this.tableName} where id=${id}`

    let delittle = await this.pdb.query(sql)

    console.log(delittle);
  }

}

module.exports = little
