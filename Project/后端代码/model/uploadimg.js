'use strict'
const fs = require('fs')
class uploadimg {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'little'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  model () {
    return this.db.model(this.tableName)
  }

  async insert (data) {
    let {filename,url,id,herid,describe,time,place,littleid,state} = data 
    console.log(filename);
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

    
    let sql1 = `update little${id} set time='${time}',imgpath='${imgpath}',state='${state}',place='${place}',describe='${describe}',uid=${id},herid=${herid} where id=${littleid}`
    let sql2 = `update little${herid} set time='${time}',imgpath='${imgpath}',state='${state}',place='${place}',describe='${describe}',uid=${herid},herid=${id} where id=${littleid}`
    
    await this.pdb.query(sql1);
    await this.pdb.query(sql2);
  }

}

module.exports = uploadimg
