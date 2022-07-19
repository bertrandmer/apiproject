import express from "express";

const router = express.Router();

router.get("/:id?", (req, res, next) => {
  try {
    let id = req.params.id;
    if (id) {
      res.json(students.GetStudent(id));
    } else {
      res.json(students.GetStudents());
    }
  } catch (error) {
    console.log(error);
    res.status("Error attempting to GET");
  }
});

router.post("/", (req, res, next) => {
  try {
    let student = req.body;
    students.CreateStudent(student);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status("Error attempting to POST");
  }
});

router.put("/:id", (req, res, next) => {
  try {
    let id = req.params.id;
    let student = req.body;
    students.UpdateStudent(id, student);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status("Error attempting to PUT");
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    let id = req.params.id;
    students.DeleteStudent(id);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status("Error attempting to DELETE");
  }
});

module.exports = router;
