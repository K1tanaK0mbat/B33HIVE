INSERT INTO departments (id, dep_name)
VALUES (1, 'Game Stories'),
       (2, 'Game Design');

-- Insert data into the roles table
INSERT INTO roles (id, title, salary, department_id)
VALUES (1, 'Manager', 1000, 1),
       (2, 'Decision-Mapper', 2000, 1),
       (3, 'Graphic Designer', 2500, 2);

-- Insert data into the employees table
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Helena', 'Blade', 1, NULL),
       (2, 'Selena', 'Carver', 1, 1);
       