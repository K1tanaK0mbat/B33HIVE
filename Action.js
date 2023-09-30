const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'company_db'
});


function viewDepartments() {
  const sql = 'SELECT * FROM departments';
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows); 
    promptUser(); 
  });
}


function viewRoles() {
  const sql = 'SELECT * FROM roles';
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows); 
    promptUser(); 
  });
}

function viewEmployees() {
  const sql = 'SELECT * FROM employees';
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows);
    promptUser(); 
  });
}

module.exports={}
