'use strict'

class getpunch {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
  }

  async get (data) {
    console.log(data);
    let {id,time} = data 

    let sql = `select * from punch${id} where time=${time}`

    let u = await this.pdb.query(sql);

    return u.rows

  }

}

module.exports = getpunch
