const inquirer = require('inquirer');
const Actions = [ 
'view all departments',
'view all roles',
'view all employees',
'add a department',
'add a role',
'add an employee',
 'update an employee role',

];

inquirer
.prompt([
    {
      type: 'list',
      name: 'Actions',
      message: 'What would you like to review?',
      choices: Actions
    },
  ])
 