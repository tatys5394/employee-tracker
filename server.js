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
          "Update an employee role"
        ],
      },
    ])

    .then((response) => {
      // console.log(response);
      // console.table(response);
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
                type: 'input',
                message: "Please type the name of the department that you would like to add to the list:",
                name: 'name',
            },
        ])

            .then(answers => {
            // db.query to add new department
                db.query("INSERT INTO department SET?;", answers) 
                console.table(answers);
              })
            };

  //   .then((response) => {
  //     console.log(response);
  //     console.table(response);
  //     const { add } = response;
  //     console.log(add);
  //     if (add === "Add a Department") {
  //       db.query(
  //         "INSERT INTO department (name) VALUES ?;",
  //         function (err, results) {
  //           if (err) throw err;
  //           console.table(results);
  //         }
  //       );
  //     } else if (add === "Add a Role") {
  //       db.query("INSERT INTO role (name) VALUES ?;", function (err, results) {
  //         console.table(results);
  //       });
  //     } else {
  //       db.query(
  //         "INSERT INTO employee (name) VALUES ?;",
  //         function (err, results) {
  //           console.table(results);
  //         }
  //       );
  //     }
  //   });

  //  .then((response) => {
  //     console.log(response)
  //     console.table(response)
  //     const { task } = response;
  //     console.log(task)
  //     if (task === "View all Departments") {
  //       db.query("SELECT * FROM department;", function (err, results) {
  //         if(err) throw err
  //         console.table(results);
  //       });
  //     } else if (task === "View all Roles") {
  //       db.query("SELECT * FROM role;", function (err, results) {
  //         console.table(results);
  //       });
  //     } else {
  //       db.query("SELECT * FROM employee;", function (err, results) {
  //         console.table(results);
  //       });
  //     }
  //   });

init();
