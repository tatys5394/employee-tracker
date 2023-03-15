-- Active: 1678919921189@@127.0.0.1@3306@company_db
INSERT INTO department (name)
VALUES ("HR"), 
        ("IT"),
        ("COORDINATION"),
        ("R AND D"),
        ("DEVELOPMENT");

INSERT INTO role (title, salary, department_id)
VALUES ("coordinator", 55000, 1), 
        ("manager", 75000, 2),
        ("head of department", 95000, 3),
        ("executive director", 120000, 4),
        ("CEO", 150000, 5);


INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES ("Carlos", "Perez", 1, 1), 
        ("Adriana", "Rodriguez", 4, 1),
        ("Diego", "Martinez", 2, 1),
        ("Juan", "Pepito", 3, 3),
        ("Laura", "Espinoza", 5, 1);
        
