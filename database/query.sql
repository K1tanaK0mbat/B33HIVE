
SELECT roles.id AS role_id, roles.title AS role_title, departments.dep_name AS department_name, roles.salary
FROM roles
JOIN departments ON roles.department_id = departments.id;

SELECT employees.id AS employee_id, employees.first_name, employees.last_name, roles.title AS role_title, departments.dep_name AS department_name, roles.salary,
  CONCAT(employees_manager.first_name, ' ', employees_manager.last_name) AS manager_name
FROM employees
JOIN roles ON employees.role_id = roles.id
JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees AS employees_manager ON employees.manager_id = employees_manager.id;