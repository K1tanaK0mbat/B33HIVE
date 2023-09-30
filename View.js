const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1mADHDK1d$',
  database: 'company_db'
});


function viewDep(callback) {
  const sql = 'SELECT * FROM departments';
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows); 
    callback(); 
  });
}


function viewRoles(callback) {
  const sql = 'SELECT * FROM roles';
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows); 
    callback(); 
  });
}

function viewWorker(callback) {
  const sql = 'SELECT * FROM employees';
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows);
    callback(); 
  });
}

module.exports={viewDep, viewRoles, viewWorker};
