import { response } from "express";
import promisePool from "../configs/connectDb";

export const getHomePage = async (req, res, next) => {
  const [rows, fields] = await promisePool.execute("SELECT * FROM users");
  return res.render("./home/index.ejs", {
    users: [...rows],
  });
};

export const createNewUser = async (req, res, next) => {
  const { firstname, lastname, email, gender, address } = req.body;
  await promisePool.execute(
    "INSERT INTO users (firstName, lastName, address, email, gender) VALUES (?,?,?,?,?)",
    [firstname, lastname, address, email, gender]
  );
  return res.redirect("/home");
};

export const getUser = async (req, res, next) => {
  const { userId } = req.body;
  const [rows, fields] = await promisePool.execute(
    `SELECT * FROM users WHERE id=${userId}`
  );
  return res.render("./userUpdate/index.ejs", { user: rows[0] });
};

export const updateUser = async (req, res, next) => {
  const { userId, firstName, lastName, email, address, gender } = req.body;
  await promisePool.execute(
    "UPDATE users SET firstName = ?, lastName= ?, address= ?, email=?, gender=? WHERE id=?",
    [firstName, lastName, address, email, gender, userId]
  );
  return res.redirect("/home");
};

export const deleteUser = async (req, res, next) => {
  const { userId } = req.body;
  await promisePool.execute(`DELETE FROM users WHERE id=${userId}`);
  return res.redirect("/home");
};
