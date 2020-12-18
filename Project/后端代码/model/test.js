'use strict'

class test {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'test'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  model () {
    return this.db.model(this.tableName)
  }

  async insert (data) {

    data.id = this.makeId()

    let r = await this.model().insert(data)

    return r.rowCount <= 0 ? false : data.id; 

  }

  async list () {

    let mlist = await this.model().limit(20).select('id,number')

    return mlist.rows

  }

  async delete (id) {

    let sql = `delete from ${this.tableName} where id=${id}`

    let deltest = await this.pdb.query(sql)

    console.log(deltest);
  }

}

module.exports = test
