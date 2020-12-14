/* exported getStudentNames */
function getStudentNames(students) {
  var nameOfStudents = [];

  for (i=0; i<students.length; i++) {
    nameOfStudents.push(students[i].name);
  }
  return nameOfStudents;
}
