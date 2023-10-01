
SELECT
    roles.id AS role_id,
    roles.title AS role_title,
    roles.department_name AS dep_name,
    roles.salary
FROM roles;

SELECT
    employees.id AS employee_id,
    employees.first_name AS employee_first_name,
    employees.last_name AS employee_last_name,
    employees.role_name AS employee_role_title,
    employees.department_name AS employee_department_name,
    employees.salary AS employee_salary,
    CONCAT(managers.first_name, ' ', managers.last_name) AS manager_name
FROM employees
LEFT JOIN employees AS managers ON employees.manager_id = managers.id;



