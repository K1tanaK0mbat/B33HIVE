const mysql = require('mysql2');
const inquirer = require('inquirer');

function updateRole(callback) {
    const employees = 'SELECT id, CONCAT(first_name, " ", last_name) AS full_name FROM employees';
    const roles = 'SELECT id, title FROM roles';
  
    db.query(employees, (err, employees) => {
      if (err) {
        console.error(err);
        return callback(); 
      }

      db.query(roles, (err, roles) => {
        if (err) {
          console.error(err);
          return callback();
        }
  
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'employees',
              message: 'Select an employee:',
              choices: employees.map((employee) => ({
                name: employee.full_name,
                value: employee.id,
              })),
            },
            {
              type: 'list',
              name: 'roles',
              message: 'Select their new role:',
              choices: roles.map((role) => ({
                name: role.title,
                value: role.id,
              })),
            },
          ])
          .then((answers) => {
            const { employees, roles } = answers;
            const sql = 'UPDATE employees SET role_id = ? WHERE id = ?';
            db.query(sql, [roles, employees], (err, result) => {
              if (err) {
                console.error(err);
              } else {
                console.log('Updated role');
              }
              callback(); 
            });
          });
      });
    });
  }
  
  module.exports={updateRole};