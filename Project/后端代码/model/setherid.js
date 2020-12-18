'use strict'

class setherid {

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

  async insert (data) {
    console.log(data);
    let {id,herid,hername,herbirthday,lovedata,imgpath} = data 

    let sql = `update users set herid=${herid},hername='${hername}',herbirthday='${herbirthday}',lovedata='${lovedata}',herimgpath='${imgpath}' where id=${id}`
    await this.pdb.query(sql);

  }

}

module.exports = setherid
