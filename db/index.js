const mysql = require("mysql");
const students = require("../queries/students");

const mysqlConfig = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "usersdb",
};

const Connection = mysql.createPool(mysqlConfig);

const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default { Query, students };

import { Query } from "../models";
const allStudents = async () => {
    return Query("SELECT ID, firstName, lastName FROM students");
  };
  
  const oneStudents = async (id) => {
    return Query("SELECT ID, firstName, lastName FROM students", [
      id,
    ]);
  };
  const addStudents = async (body) => {
    return Query("INSERT INTO students SET ?", [body]);
  };
  
  const updateStudents = async (body, id) => {
    return Query("UPDATE students SET ? WHERE ID = ?", [body, id]);
  };
  
  const removeStudents = async (id) => {
    return Query("DELETE FROM students WHERE ID = ?", [id]);
  }

  export default {
    allStudents,
    oneStudent,
    addStudent,
    updateStudent,
    removeStudent,
  };
