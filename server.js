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

inquirer
  .prompt([
    {
      type: "list",
      message: "Please select from the list below",
      name: "task",
      choices: ["Show all Departments", "Show all Roles", "Show all Employees"],
    },
  ])

  .then((response) => {
    console.log(response)
    console.table(response)
    const { task } = response;
    console.log(task)
    if (task === "Show all Departments") {
      db.query("SELECT * FROM department;", function (err, results) {
        if(err) throw err
        console.table(results);
      });
    } else if (task === "Show all Roles") {
      db.query("SELECT * FROM role;", function (err, results) {
        console.table(results);
      });
    } else {
      db.query("SELECT * FROM employee;", function (err, results) {
        console.table(results);
      });
    }
  });
