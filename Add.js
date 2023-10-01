const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1mADHDK1d$',
  database: 'company_db'
});


function addDep(callback) {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'depName',
          message: 'Enter the name of your new department:',
        },
      ])
      .then((answers) => {
        const { depName } = answers;
        const sql = 'INSERT INTO departments (dep_name) VALUES (?)';
        db.query(sql, [depName], (err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log(`Added  ${depName}`);
          }
          callback(); 
        });
      });
  }
  

  


function addRole(callback) {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'role',
          message: 'Enter the name of your new role',
        },
      
        {
            type:'input',
            name:'salary',
            message:'What is the salary for this role'
        },
         {
            type:'input',
            name: 'department',
            message:'Enter department id'
        }
      ])
      .then((answers) => {
        const { role, salary, department } = answers;
        const sql = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
        db.query(sql, [role, salary, department], (err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log(`Added: ${role}`);
          }
          callback(); 
        });
      });
  }


function addWorker(callback) {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'firstname',
          message: 'Enter first name of worker',
        },
        {
            type: 'input',
            name: 'lastname',
            message: 'Enter last name of worker',
          },
          {
            type: 'input',
            name: 'role',
            message: 'Assign role ID to worker',
          },
          {
            type: 'input',
            name: 'manager',
            message: 'Assign manager ID to this worker',
          },
      ])
      .then((answers) => {
        const { firstname, lastname, role, manager } = answers;
        const sql = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        db.query(sql, [firstname, lastname, role, manager], (err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log(`Added  ${firstname} ${lastname}`);
          }
          callback(); 
        });
      });
  }


  

module.exports={addDep, addRole, addWorker,};