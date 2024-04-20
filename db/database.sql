CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee (id, name, salary) VALUES
(1, 'John', 1000),
(2, 'Henry', 2000),
(3, 'Juan', 3000),
(4, 'Carlos', 4000);   
