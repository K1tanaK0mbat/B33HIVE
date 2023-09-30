const inquirer = require('inquirer');
const{} = require('./Action.js');

function promptUser() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
          ]
        }
      ])
      .then((answers) => {
        switch (answers.choices) {
          case 'View all departments':
            viewDepartments();
            break;
          case 'View all roles':
            viewRoles();
            break;
          case 'View all employees':
            viewEmployees();
            break;
         
        }
      });
  }
  
  
  promptUser();