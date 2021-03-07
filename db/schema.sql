
-- DROP TABLE IF EXISTS department;
-- DROP TABLE IF EXISTS employee; 
-- DROP TABLLE IF EXISTS role; 

CREATE DATABASE employeetracker; 

CREATE TABLE department (
  id INTEGER auto_increment PRIMARY KEY,
  name VARCHAR(30),
);

CREATE TABLE role (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER, 
  CONSTRAINT fk_department FOREIGN KEY (department_id), REFERENCES department(id) 
);

CREATE TABLE employee (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER, 
  CONSTRAINT fk_role FOREIGN KEY (role_id), REFERENCES role(id), 
  CONSTRAINT fk_manager FOREIGN KEY (manager_id), REFERENCES employee(id)
);