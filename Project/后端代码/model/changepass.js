'use strict'

class changepass {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'users'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  model () {
    return this.db.model(this.tableName)
  }


  async update (data) {
    
    let {id,password} = data

    let sql = `update users set password='${password}' where id=${id}`

    await this.pdb.query(sql)
    
  }

}

module.exports = changepass
