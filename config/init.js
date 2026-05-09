const pool = require("./db")

async function init() {
    const createTable = `
        CREATE TABLE IF NOT EXISTS schools (
            id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            latitude FLOAT NOT NULL,
            longitude FLOAT NOT NULL
        );
    `
    try {
        await pool.query(createTable)
        console.log("schools table ready")
        process.exit(0)
    } catch (error) {
        console.error("error:", error.message)
        process.exit(1)
    }
}

init()