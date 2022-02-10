const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate().then(() => {
    console.log('connected to db');
}).catch((err) =>{
    console.log(err);
})

// OR to authenticate the connection

// const connection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("connected to db");
//   } catch (error) {
//     console.log(error);
//   }
// };
// connection();

module.exports = sequelize;
