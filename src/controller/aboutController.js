import promisePool from "../configs/connectDb";

export const getAboutPage = async (req, res, next) => {
  const { id } = req.params;
  const [rows, fields] = await promisePool.execute(
    `SELECT * FROM users WHERE id=${id}`
  );
  return res.render("./about/index.ejs", { user: rows[0] });
};
