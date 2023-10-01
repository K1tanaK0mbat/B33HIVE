DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  dep_name VARCHAR(30) NOT NULL,
  INDEX idx_dep_name (dep_name)  
);


CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  FOREIGN KEY (department_name) REFERENCES departments(dep_name),
  INDEX idx_title_salary_department_name (title, salary, department_name)
);


CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT,
  role_name VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_name VARCHAR(30) NOT NULL,  
  FOREIGN KEY (role_name, salary, department_name) REFERENCES roles(title, salary, department_name),  
  INDEX idx_role_salary_department_name (role_name, salary, department_name)
);













