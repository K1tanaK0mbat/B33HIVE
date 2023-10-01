const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1mADHDK1d$',
    database: 'company_db'
  });
  
  function eraseWorker(callback) {
    const employees = 'SELECT id FROM employees';

      db.query(employees, (err,employees ) => {
        if (err) {
          console.error(err);
          return callback();
        }
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'employees',
              message: 'Select an employee to delete',
              choices: employees.map((employee) => ({
                value: employee.id ,
              })),
            },
          ])
          .then((answers) => {
            const {employees} = answers;
            const sql = 'DELETE FROM roles WHERE id = ?';
            db.query(sql, [employees], (err, result) => {
              if (err) {
                console.error(err);
              } else {
                console.log('Deleted employee');
              }
              callback(); 
            });
          });
      });
  }
  
  function eraseDep(callback) {
    const departments = 'SELECT id FROM departments';

      db.query(departments, (err, Department ) => {
        if (err) {
          console.error(err);
          return callback();
        }
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'departments',
              message: 'Select a department to delete ',
              choices: departments.map((department) => ({
                value: department.id,
              })),
            },
          ])
          .then((answers) => {
            const {departments} = answers;
            const sql = 'DELETE FROM departments WHERE id = ?';
            db.query(sql, [departments], (err, result) => {
              if (err) {
                console.error(err);
              } else {
                console.log('Deleted department');
              }
              callback(); 
            });
          });
      });
  }
  

  function eraseRole(callback) {
    const roles = 'SELECT id FROM roles';

      db.query(roles, (err, roles ) => {
        if (err) {
          console.error(err);
          return callback();
        }
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'role',
              message: 'Select a role to delete ',
              choices: roles.map((role) => ({
                value: role.id,
              })),
            },
          ])
          .then((answers) => {
            const {roles} = answers;
            const sql = 'DELETE FROM roles WHERE id = ?';
            db.query(sql, [roles], (err, result) => {
              if (err) {
                console.error(err);
              } else {
                console.log('Deleted role');
              }
              callback(); 
            });
          });
      });
  }
  
  
  function Delete() {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'options',
            message: 'Which do you want to delete?',
            choices: [
                'Delete an employee',
                'Delete a department',
                'Delete a role',
            ]
          },
        ])
        .then((answers) => {
            switch (answers.options) {
                  case 'Delete an employee':
                eraseWorker(promptUser);
                break;
                  case 'Delete a department':
                eraseDep(promptUser);
                break;
                  case 'Delete a role':
                eraseRole(promptUser);
                break;
            }
            });
    }
  
  
    
  
  module.exports={Delete};