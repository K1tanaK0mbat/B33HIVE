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
            message:'Enter department name'
        }
      ])
      .then((answers) => {
        const { role, salary, department } = answers;
        const sql = 'INSERT INTO roles (title, salary, department_name) VALUES (?, ?, ?)';
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

  function isValidManagerID(managerID) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT COUNT(*) AS count FROM employees WHERE id = ?';
      db.query(sql, [managerID], (err, result) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          const count = result[0].count;
          if (count === 1) {
            resolve(true); 
          } else {
            console.error('Invalid manager ID. Please enter a valid manager ID.');
            resolve(false); 
          }
        }
      });
    });
  }
  

  function addWorker(callback) {
    const getRolesQuery = 'SELECT title, department_name FROM roles';
    db.query(getRolesQuery, (err, results) => {
      if (err) {
        console.error(err);
        return callback();
      }
  
      const roleChoices = results.map((row) => row.title);
      const departmentMap = results.reduce((map, row) => {
        map[row.title] = row.department_name;
        return map;
      }, {});
  
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
            type: 'confirm',
            name: 'isManager',
            message: 'Is this worker a manager?',
            default: false,
          },
          {
            type: 'input',
            name: 'manager',
            message: 'Assign manager ID to this worker',
            when: (answers) => !answers.isManager,
            validate: function (input) {
              return isValidManagerID(input);
            },
          },
          {
            type: 'list',
            name: 'role',
            message: 'Select a role for the worker',
            choices: roleChoices,
          },
        ])
        .then((answers) => {
          const selectedRole = answers.role;
          const selectedDepartment = departmentMap[selectedRole];
  
          const getRoleQuery = 'SELECT salary FROM roles WHERE title = ?';
          db.query(getRoleQuery, [selectedRole], (err, roleResults) => {
            if (err) {
              console.error(err);
              return callback();
            }

            const defaultSalary = roleResults.length > 0 ? roleResults[0].salary : 0;
  
            const { firstname, lastname, manager, role } = answers;
            const managerID = answers.isManager ? null : manager;
            const sql =
              'INSERT INTO employees (first_name, last_name, manager_id, role_name, salary, department_name) VALUES (?, ?, ?, ?, ?, ?)';
            db.query(
              sql,
              [firstname, lastname, managerID, role, defaultSalary, selectedDepartment],
              (err, result) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log(`Added ${firstname} ${lastname}`);
                }
                callback();
              }
            );
          });
        });
    });
  }
  

module.exports={addDep, addRole, addWorker,};