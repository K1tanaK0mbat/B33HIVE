
SELECT
    roles.id AS role_id,
    roles.title AS role_title,
    departments.dep_name AS dep_name,
    roles.salary
FROM roles
JOIN departments ON roles.department_id = departments.id;

SELECT
    e.id AS employee_id,
    e.first_name AS employee_first_name,
    e.last_name AS employee_last_name,
    r.title AS employee_role_title,
    d.dep_name AS employee_department_name,
    r.salary AS employee_salary,
    CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employees e
JOIN roles r ON e.role_id = r.id
JOIN departments d ON r.department_id = d.id
LEFT JOIN employees m ON e.manager_id = m.id;



