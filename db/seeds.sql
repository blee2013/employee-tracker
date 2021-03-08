INSERT INTO department (name)
VALUES 
('White House'), 
('Pope & Associates'), 
('B613'), 
('DA Office');

INSERT INTO role (title, salary, department_id)
VALUES 
('President', 500000, 1),
('First Lady', 250000, 1),
('Director of Communications', 200000, 1),
('Chief of Staff', 100000, 1),
('CEO', 500000, 2),
('Associate', 300000, 2),
('Agent', 300000, 3),
('Command', 700000, 3),
('Attorney General', 100000, 4),
('Assistant',75000,4);



INSERT INTO employee ( first_name, last_name, manager_id, role_id)
VALUES
('Olivia', 'Pope', null, 6 ),
('Abby', 'Whelan', 2, 7 ),
('Quinn', 'Perkins', 2, 7),
('Huck', 'Unknown', 2, 7),
('Harrison', 'Wright', 2, 7),
('Stephen', 'Finch', 2, 7),
('Fitzgerald', 'Grant', null, 1),
('Sally', 'Langston', 1, 2),
('Cyprus', 'Beene', 1, 5),
('Marcus', 'Walker', 1, 4),
('Mellie', 'Grant', 1,  3),
('Jake', 'Ballard', 3, 8),
('Rowan', 'Pope', null, 9),
('Charlie', 'Unknown', 3, 8),
('Tom', 'Larson', 3, 8),
('David', 'Rosen', null, 10),
('Elizabeeth', 'North', 4, 4),
('Alissa', 'Unknown', 4, 4);