const express = require("express")
const app = express()
const db = require("./config/db")
const announcedlga = require("./models/annuncedlga") 
const cors = require("cors")

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use("/", require("./routes/announcedlga"))

announcedlga.sync({force: false})
const port = process.env.PORT || 5000
app.listen(port, console.log(`server listening on port ${port}`))