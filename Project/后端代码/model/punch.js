'use strict'

class punch {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'punch'
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

    let sql = `select * from ${this.tableName} order by id asc`
          
    let plist = await this.pdb.query(sql)

    return plist.rows

  }

  async delete (id) {

    let sql = `delete from ${this.tableName} where id=${id}`

    let delpunch = await this.pdb.query(sql)

    console.log(delpunch);
  }

}

module.exports = punch
