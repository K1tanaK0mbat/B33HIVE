
INSERT INTO departments (dep_name)
VALUES ('Game Stories'),
       ('Game Design');


INSERT INTO roles (title, salary, department_id)
VALUES ('Writers Manager', 2000, 1),
       ('Design Manager', 3000, 2),
       ('Decision-Mapper', 1000, 1),
       ('Graphic Designer', 2000, 2);

INSERT INTO managers (first_name, last_name, role_id)
VALUES ('Marie', 'Cull', 1),
       ('Gale', 'Rivers', 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Helena', 'Blade', 3, 1),
       ('Selena', 'Carver', 4, 2);

