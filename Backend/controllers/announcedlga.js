const announcedlga = require("../models/annuncedlga") 

//  sql get data
const get__announcedlga =  async(req, res)=>{;
    const foundData = await  announcedlga.findAll()
    foundData ? res.status(200).json(foundData) : res.json("no data found")
  }

  module.exports = {
    get__announcedlga
  }