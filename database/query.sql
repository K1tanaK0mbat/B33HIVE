
SELECT employees.id AS employee_id, employees.first_name, employees.last_name, roles.title AS job_title, roles.salary, departments.dep_name AS department_name
FROM employees
JOIN roles ON employees.role_id = roles.id
JOIN departments ON roles.department_id = departments.id;

SELECT departments.dep_name AS department_name, AVG(roles.salary) AS average_salary
FROM departments
LEFT JOIN roles ON departments.id = roles.department_id
LEFT JOIN employees ON roles.id = employees.role_id
GROUP BY departments.dep_name;
