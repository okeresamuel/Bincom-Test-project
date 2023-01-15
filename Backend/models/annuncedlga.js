const sequelize = require("../config/db")
const Sequelize = require("sequelize")

const announced_lga = sequelize.define("announced_pu_results", {
    result_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true,
    },
    polling_unit_uniqueid:{
        type:Sequelize.STRING,
        allowNull:false
    },
    party_abbreviation:{
        type:Sequelize.STRING,
        allowNull:false
    },
     party_score:{
        type:Sequelize.STRING,
        allowNull:false
    },
    entered_by_user:{
        type:Sequelize.STRING,
        allowNull:false
    },
    date_entered:{
        type:Sequelize.STRING,
        allowNull:false
    },
    user_ip_address:{
        type:Sequelize.STRING,
        allowNull:false 
    },

},
    {
        timestamps: false
    }
)

module.exports = announced_lga;
