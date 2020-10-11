const sql = require('mssql')
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options:{encrypt:false},
    port:parseInt(process.env.DB_PORT)
};



const poolPromise = new sql.ConnectionPool(config).connect().then().catch(err => console.log('Database Connection Failed! Bad Config: ', err))


// const poolPromise = new sql.ConnectionPool(config)
//     .connect()
//     .then(pool => {
//         return pool
//     })
//     .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {sql, poolPromise}