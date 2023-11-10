const mysql = require("mysql");
const config = require("./constant.json");
const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASS,
  port: config.DB_POST,
  database: config.DB_DATABASE,
});

pool.getConnection((err: Error) => {
  if (err) {
    console.log("Error has occured to db", err.stack);
    process.exit(1);
  }

  console.log("Connected to DB");
});

const executeQuery = (query, arrayParams) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrayParams, (err, data) => {
        if (err) {
          console.log("Error executing query");
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };
