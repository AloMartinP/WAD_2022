// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Muhvik123123",
    database: "WAD_2022",
    host: "localhost",
    port: "5432"
});

const execute = async(createUserTable, createPostsTable) => {
    try {
        await pool.connect();
        await pool.query(createUserTable);
        await pool.query(createPostsTable);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const createUserTable = `
    CREATE TABLE IF NOT EXISTS "users" (
       "id" SERIAL PRIMARY KEY,
       "email" VARCHAR(200) UNIQUE NOT NULL,
       "password" VARCHAR(200) NOT NULL
    );`;

const createPostsTable = `
    CREATE TABLE IF NOT EXISTS "posts" (
    "title" VARCHAR(20) NOT NULL,
    "body" VARCHAR(1000) NOT NULL,
    "date" DATE NOT NULL
    );`;


execute(createUserTable, createPostsTable).then(result => {
    if (result) {
        console.log("If not present, created tables");
    }
})

module.exports = pool;