'use strict'

class h5 {
  constructor () {
    this.param = '/'
  }

  async get(c) {
    
    c.setHeader('cache-control', 'public, max-age=60')

    let html = await c.helper.readb(c.service.pagePath + '/h5-intro.html')

    c.setHeader('content-type', 'text/html; charset=utf-8')

    c.send(html)
  }

}

module.exports = h5