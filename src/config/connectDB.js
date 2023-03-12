const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: '45.252.249.18',
//     user: 'ckkuxkup_lottery_db_fn',
//     password: 'lottery_db_fn',
//     database: 'ckkuxkup_lottery_db_fn'
// });

const connection = mysql.createPool({
    host: '103.110.84.7',
    user: 'zlcsrffi_lottery_db',
    password: 'Luongngocanh@123',
    database: 'zlcsrffi_lottery_db'
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;