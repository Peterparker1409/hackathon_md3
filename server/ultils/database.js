const mysql = require("mysql2");

const pool = mysql.createPool({
  database: "quanliuser",
  host: "localhost",
  user: "root",
  password: "khoa",
  port: 3306,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

module.exports = pool.promise();
