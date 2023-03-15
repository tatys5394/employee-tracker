const express = require("express");
const mysql = require('mysql2');
const inquirer = require("inquirer");
require("console.table");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database

inquirer
    .prompt([
    {
        type: "list",
        message: "Please select from the list below",
        name: "select",
        choice: ["Show all Departments", "Show all Roles", "Show all Employees"]
    }
    ])

    .then((respond) => {
        const {task} = response.task;
        if(task === "Show all departments") {
            db.query("SELECT * FROM department;", function(err, results) {
                console.table(results);
            });

        } else if(task === "Show all roles") {
            db.query("SELECT * FROM role;", function(err, results) {
                console.table(results);
            });

        } else {
            db.query("SELECT * FROM role;", function(err, results) {
                console.table(results);

        });
    }})