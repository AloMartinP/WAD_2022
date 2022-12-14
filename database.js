const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "",
    database: "testWad",
    host: "localhost",
    port: "5432"
});


const execute = async(query) => {
    try {
        await pool.connect();
        await pool.query(query);
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
        "urllink" VARCHAR(200)  
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exists, create the "posttable" table');
    }
});

module.exports = pool;