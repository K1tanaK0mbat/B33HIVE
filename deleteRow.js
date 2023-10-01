const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1mADHDK1d$',
  database: 'company_db'
});

function eraseWorker(callback) {
  const employees = 'SELECT id, CONCAT(first_name, " ", last_name) AS full_name FROM employees';

  db.query(employees, (err, employees) => {
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
            name: employee.full_name,
            value: employee.id,
          })),
        },
      ])
      .then((answers) => {
        const { employees } = answers;
        const sql = 'DELETE FROM employees WHERE id = ?';
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
    const departments = 'SELECT dep_name FROM departments';
  
    db.query(departments, (err, departments) => {
      if (err) {
        console.error(err);
        return callback();
      }
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'department',
            message: 'Select a department to delete ',
            choices: departments.map((department) => department.dep_name),
          },
        ])
        .then((answers) => {
          const { department } = answers;
          const sql = 'DELETE FROM departments WHERE dep_name = ?';
          db.query(sql, [department], (err, result) => {
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
    const roles = 'SELECT title FROM roles';
  
    db.query(roles, (err, roles) => {
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
            choices: roles.map((role) => role.title),
          },
        ])
        .then((answers) => {
          const { role } = answers;
          const sql = 'DELETE FROM roles WHERE title = ?';
          db.query(sql, [role], (err, result) => {
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
  

function Delete(callback) {
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
            'Exit'
          ],
        },
      ])
      .then((answers) => {
        const { options } = answers;
        switch (options) {
          case 'Delete an employee':
            eraseWorker(() => Delete(callback));
            break;
          case 'Delete a department':
            eraseDep(() => Delete(callback));
            break;
          case 'Delete a role':
            eraseRole(() => Delete(callback));
            break;
          case 'Exit':
            if (callback) {
              callback(); 
            }
            break;
        }
      });
  }
  

module.exports = { Delete };
