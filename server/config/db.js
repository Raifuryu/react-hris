const mysql = require("mysql2");
require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
});

const getData = async () => {
  con.query("SELECT * FROM `tis`", function (err, results, fields) {
    console.log(results);
    console.log(fields);

    return err || results;
  });
};

const postData = async () => {
  con.query("INSERT INTO `` VALUES(`?`,`?`,`?`)", function (err, results) {
    return err || results;
  });
};
