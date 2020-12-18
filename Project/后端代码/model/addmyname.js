'use strict'
const fs = require('fs')
class addmyname {

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

    let {id,myname,birthday,sex,secret,url,filename} = data 
    if(url){
      var base64 = url.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
      var dataBuffer = new Buffer.from(base64, 'base64'); //把base64码转成buffer对象，
      var des_file = './public/images/' + filename
      var imgpath = 'http://www.cgwzz.top:1234/static/images/'+filename
      fs.writeFile(des_file, dataBuffer, function (err) {//用fs写入文件
          if (err) {
              console.log(err);
          } else {
              console.log('写入成功！');
          }
      })
      let sql = `update users set myname='${myname}',birthday='${birthday}',sex='${sex}',secret='${secret}',imgpath='${imgpath}' where id=${id}`
      await this.pdb.query(sql);
      let sql1 = `create table little${id} as select * from little`
      await this.pdb.query(sql1);
    }
    else{
      let sql = `update users set myname='${myname}',birthday='${birthday}',sex='${sex}',secret='${secret}' where id=${id}`
      await this.pdb.query(sql);
      let sql1 = `create table little${id} as select * from little`
      await this.pdb.query(sql1);
    }

  }

}

module.exports = addmyname
