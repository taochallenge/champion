'use strict'

class centence {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'centence'
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

    let sql = 'select * from centence order by id asc'

    let clist = await this.pdb.query(sql)

    return clist.rows

  }

  async delete (id) {

    let sql = `delete from ${this.tableName} where id=${id}`

    let delcentence = await this.pdb.query(sql)

    console.log(delcentence);
  }
  async get (id) {

    let sql = `select * from ${this.tableName} where time='${id}'`

    let u = await this.pdb.query(sql)
    
    return u.rows
  }
}

module.exports = centence
