'use strict'

class getmemory {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
  }


  async get (data) {
    
    let {id,herid} = data

    let sql = `select * from memory where uid=${id} or uid=${herid}`

    let u = await this.pdb.query(sql)

    return u.rows
  }

}

module.exports = getmemory
