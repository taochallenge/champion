'use strict'

class memory {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'memory'
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

    let sql = `select memory.id,name,time,myname from users,memory where users.id=memory.uid`

    let dlist = await this.pdb.query(sql)

    return dlist.rows

  }

  async delete (id) {

    let sql = `delete from ${this.tableName} where id=${id}`

    let delmemory = await this.pdb.query(sql)

    console.log(delmemory);
  }

}

module.exports = memory
