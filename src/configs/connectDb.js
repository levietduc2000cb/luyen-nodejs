import mysql from "mysql2";

// create the connection to database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});
const promisePool = pool.promise();

export default promisePool;
