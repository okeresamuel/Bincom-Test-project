const express = require("express")
const router = express.Router()
const {get__announcedlga } = require("../controllers/announcedlga")


router.get("/App", get__announcedlga)

module.exports = router;