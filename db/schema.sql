-- Active: 1678919921189@@127.0.0.1@3306@company_db
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     title VARCHAR(30) NOT NULL,
     salary DECIMAL,
     department_id INT, 
     FOREIGN KEY (department_id)
     references department(id)
     ON DELETE SET NULL
);

CREATE TABLE employee (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INT,
     FOREIGN KEY (role_id)
     references role (id)
     ON DELETE SET NULL,
     manager_id INT DEFAULT NULL,
     FOREIGN KEY (manager_id)
     references employee(id)
     ON DELETE SET NULL
);




