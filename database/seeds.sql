
INSERT INTO departments (dep_name)
VALUES ('Game Stories'),
       ('Game Design');


INSERT INTO roles (title, salary, department_name)
VALUES ('Writers Manager', 2000, 'Game Stories'),
       ('Design Manager', 3000, 'Game Design'),
       ('Decision-Mapper', 1000, 'Game Stories'),
       ('Graphic Designer', 2000, 'Game Design');


INSERT INTO employees (first_name, last_name, manager_id, role_name, salary, department_name )
VALUES ('Helena', 'Blade',  1,'Decision-Mapper', 1000, 'Game Stories'),
       ('Selena', 'Carver',  2, 'Graphic Designer', 2000, 'Game Design'),
       ('Marie', 'Cull', NULL, 'Writers Manager', 2000, 'Game Stories'),
       ('Gale', 'Rivers',  NULL,'Design Manager', 3000, 'Game Design');

