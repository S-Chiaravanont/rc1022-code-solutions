/* exported getStudentNames */
function getStudentNames(students) {
  var nameArray = [];
  for (let i = 0; i < students.length; i++) {
    nameArray.push(students[i].name);
  }
  return nameArray;
}
