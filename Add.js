const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1mADHDK1d$',
  database: 'company_db'
});


function addDep() {
  const sql = '';
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}


function addRole() {
  const sql = '';
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
   
  });
}

function addWorker() {
  const sql = '';
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
  
  });
}

function updateRole() {
    const sql = '';
    db.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
        return;
      }
    
    });
  }

module.exports={addDep, addRole, addWorker, updateRole};