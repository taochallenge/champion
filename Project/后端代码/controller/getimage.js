class getimage {

    async get(c) {
      let image = c.service.model.getimage
  
      let ilist = await image.get(c)
  
      c.send(ilist)
    }
    
  
  }
  
  module.exports = getimage