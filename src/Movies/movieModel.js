const sequelize = require("../db/connection")
const { DataTypes } = require("sequelize")


const Film = sequelize.define("Netflix",{
    name: {
        type: DataTypes.STRING,
        allowedNull: false
      },
      actor: {
        type: DataTypes.STRING,
        allowedNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      Year: {
        type: DataTypes.DATE,
      },
})

module.exports = Film;