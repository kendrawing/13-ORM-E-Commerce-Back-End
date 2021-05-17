require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// if(2 > 1) {
//   console.log("true")
// } else {
//   console.log("false")
// }

// (2 > 1) ? console.log("true") : console.log("false")

module.exports = sequelize;
