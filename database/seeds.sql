INSERT INTO departments (id, dep_name)
VALUES (1, 'Example1'),
       (2, 'Example2');

-- Insert data into the roles table
INSERT INTO roles (id, title, salary, department_id)
VALUES (1, 'Role1', 1000, 1),
       (2, 'Role1-1', 1000, 1),
       (3, 'Role2', 2000, 2);

-- Insert data into the employees table
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'name1', 'name2', 1, NULL),
       (2, 'name3', 'name4', 2, 1),
       (3, 'name5', 'name6', 3, 2);