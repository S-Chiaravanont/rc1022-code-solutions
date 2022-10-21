/* exported getStudentNames */
function getStudentNames(students) {
  var nameArray = [];
  for (var i = 0; i < students.length; i++) {
    nameArray.push(students[i].name);
  }
  return nameArray;
}
