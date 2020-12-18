'use strict'

class setherid {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'users'
  }

  async insert (data) {
    console.log(data);
    let {id,time,count} = data 

    let sql = `update punch${id} set state=true,count=${count} where time=${time}`

    await this.pdb.query(sql);

  }

}

module.exports = setherid
