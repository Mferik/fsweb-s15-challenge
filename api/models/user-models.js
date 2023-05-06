const db = require("../../data/dbConfig");

const getAllUsers = async function () {
  return await db("users");
};

const getByFilter = async (filter) => {
  const user = await db("users").where(filter).first();
  return user;
};

const insertUser = async (user) => {
  const [insertedId] = await db("users").insert(user);
  return await getByFilter({ id: insertedId });
};

module.exports = { getAllUsers, getByFilter, insertUser };
