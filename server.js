const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database

const db = mysql.createConnection(
  {
    user: "root",
    password: "bananas",
    database: "company_db",
    host: "localhost",
  },
  console.log("db connected")
);

const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select from the following options:",
        name: "task",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an employee role",
        ],
      },
    ])

    .then((response) => {
      const { task } = response;
      console.log(task);
      if (task === "View all Departments") {
        db.query("SELECT * FROM department;", function (err, results) {
          if (err) throw err;
          console.table(results);
          init();
        });
      } else if (task === "View all Roles") {
        db.query("SELECT * FROM role;", function (err, results) {
          console.table(results);
          init();
        });
      } else if (task === "View all Employees") {
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          init();
        });
      } else if (task === "Add a Department") {
        // *****************************************************************
        inquirer
          .prompt([
            {
              type: "input",
              message:
                "Please type the name of the department that you would like to add:",
              name: "name",
            },
          ])

          .then((answers) => {
            // db.query to add new department
            db.query("INSERT INTO department (name) VALUES (?)", answers.name);
            console.table(answers);
            init();
          })

        
      } else if (task === "Add a Role") {
        // *****************************************************************
        inquirer
          .prompt([
            {
              type: "input",
              message:
                "Please type the name of the role that you would like to add:",
              name: "title",
            }, 
            
            {
              type: "input",
              message: "Please type the salary for this role:",
              name: "salary"
            },

            {
              type: "input",
              message: "Please type the number of the department ID for this role:",
              name: "department_id"
            }
          ])

          .then((answers) => {
            // db.query to add new role
            db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answers.title, answers.salary, answers.department_id]);
            console.table(answers);
            init();
          });

      } else if (task === "Add an Employee") {
        // *****************************************************************
        inquirer
          .prompt([
            {
              type: "input",
              message:
                "Please type the first name of the employee that you would like to add:",
              name: "first_name"
            },

            {
              type: "input",
              message:
                "Please type the last name of the employee that you would like to add:",
              name: "last_name"
            },

            {
              type: "input",
              message:
                "Please type the role ID of the employee that you would like to add:",
              name: "role_id"
            },

            {
              type: "input",
              message:
                "Please type the manager ID of the employee that you would like to add:",
              name: "manager_id",
            }
          ])

          .then((answers) => {
            // db.query to add new employee
            db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)", answers.first_name, answers.last_name, answers.role_id, answers.manager_id);
            console.table(answers);
            init();
          });

          

      } else if (task === "Update an employee role") {
        // *****************************************************************
        inquirer
          .prompt([
            {
              type: "input",
              message:
                "Please type the employee ID that you want to update:",
              name: "employee",
            }, 

            {
              type: "input",
              message:
                "Please type the new role ID:",
              name: "role",
            }
          ])

            .then((answers) => {
              // db.query to add new department
              db.query("UPDATE employee SET role_id = ?  WHERE id = ?", [answers.role, answers.employee]);
              console.table(answers);
              init();
            })
        }});
};
init();
