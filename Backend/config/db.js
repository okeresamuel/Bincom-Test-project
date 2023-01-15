const sequelize__pkg = require("sequelize")
const dotenv = require("dotenv").config()


const sequelize = new sequelize__pkg("bincomtest", 'root',  '', {
    host: "localhost",
    dialect: "mysql",
    port: "3306"
});
module.exports = sequelize

sequelize.authenticate().then((data)=>{
console.log("successfully connected mysql")
}).catch((err)=>{
    console.log(err)
})