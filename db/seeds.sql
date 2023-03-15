INSERT INTO department (name)
VALUES ("HR"), 
        ("IT"),
        ("COORDINATION"),
        ("R AND D");
        ("DEVELOPMENT")

INSERT INTO role (title, salary, department_id)
VALUES ("coordinator", "$55,000", 1), 
        ("manager", "$75,000", 2),
        ("head of department", "$95,000", 3),
        ("executive director", "$120,000", 4);
        ("CEO", "$150,000", 5);


INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES ("Carlos", "Perez", 1, 3), 
        ("Adriana", "Rodriguez", 4, 5),
        ("Diego", "Martinez", 2, 4),
        ("Juan", "Pepito", 3, 2),
        ("Laura", "Espinoza", 5);
        
