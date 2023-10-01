
SELECT roles.id AS role_id,  roles.title AS role_title, departments.dep_name AS dep_name, roles.salary
FROM roles
JOIN departments ON roles.department_id = departments.id;

SELECT
    employees.id AS employee_id,
    employees.first_name,
    employees.last_name,
    roles.title AS role_title,
    departments.dep_name AS department_name,
    roles.salary as salary,
    CONCAT(managers.first_name, ' ', managers.last_name) AS manager_name
FROM employees
JOIN roles ON employees.role_id = roles.id
JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees AS managers ON employees.manager_id = managers.id;
