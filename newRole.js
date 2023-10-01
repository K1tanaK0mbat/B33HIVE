const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1mADHDK1d$',
  database: 'company_db',
});

function updateRole(callback) {

  const employeesQuery =
    'SELECT employees.id, CONCAT(employees.first_name, " ", employees.last_name) AS full_name, employees.role_name FROM employees';
  const rolesQuery = 'SELECT id, title, salary, department_name FROM roles';

  db.query(employeesQuery, (err, employees) => {
    if (err) {
      console.error(err);
      return callback();
    }

    db.query(rolesQuery, (err, roles) => {
      if (err) {
        console.error(err);
        return callback();
      }

      inquirer
        .prompt([
          {
            type: 'list',
            name: 'employeeId',
            message: 'Select an employee to update their role:',
            choices: employees.map((employee) => ({
              name: `${employee.full_name} (Current Role: ${employee.role_name})`,
              value: employee.id,
            })),
          },
          {
            type: 'list',
            name: 'roleId',
            message: 'Select the new role for the employee:',
            choices: roles.map((role) => ({
              name: `${role.title} (Salary: ${role.salary}, Department: ${role.department_name})`,
              value: role.id,
            })),
          },
        ])
        .then((answers) => {
          const { employeeId, roleId } = answers;

          const selectedRole = roles.find((role) => role.id === roleId);

          const updateQuery =
            'UPDATE employees SET role_name = ?, salary = ?, department_name = ? WHERE id = ?';
          db.query(
            updateQuery,
            [selectedRole.title, selectedRole.salary, selectedRole.department_name, employeeId],
            (err, result) => {
              if (err) {
                console.error(err);
              } else {
                console.log('Updated employee role');
              }
              callback();
            }
          );
        });
    });
  });
}

module.exports = { updateRole };
