const inquirer = require('inquirer');
const{viewDep, viewRoles, viewWorker} = require('./View.js');
const{addDep, addRole, addWorker, } = require('./Add.js');
const {updateRole} = require('./newRole.js');
const {Delete} = require ('./deleteRow.js');

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
            'add a department',
            'add a role',
            'add an employee',
        'update an employee role',
        'Delete an employee, role, or department',
        'exit',
          ]
        }
      ])
      .then((answers) => {
        switch (answers.action) {
          case 'View all departments':
            viewDep(promptUser);
            break;
          case 'View all roles':
            viewRoles(promptUser);
            break;
          case 'View all employees':
            viewWorker(promptUser);
            break;
            case 'add a department':
          addDep(promptUser);
          break;
            case 'add a role':
          addRole(promptUser);
          break;
            case 'add an employee':
          addWorker(promptUser);
          break;
        case 'update an employee role':
          updateRole(promptUser);
          break;
          case 'Delete an employee, role, or department':
          Delete(promptUser);
          break;
          case 'Exit application':
            process.exit(0);
        }
      });
  }
  
  
  promptUser();