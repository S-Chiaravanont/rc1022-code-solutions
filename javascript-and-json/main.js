var books = [
  {
    title: 'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming',
    author: 'Eric Matthes',
    isbn: '978-1593279288'
  }, {
    title: 'Automate the Boring Stuff with Python, 2nd Edition: Practical Programming for Total Beginners',
    author: 'Al Sweigart',
    isbn: '978-1593279929'
  }, {
    title: 'Python for Data Science: A Hands-On Introduction',
    author: 'Yuli Vasiliev',
    isbn: '978-1718502208'
  }
];

console.log('books:', books);
console.log('type of books:', typeof books);
var jsonBooks = JSON.stringify(books);
console.log('json books:', jsonBooks);
console.log('type of json books:', typeof jsonBooks);

var jsonStudent = '[{"id":12216569,"name":"Chai Chiaravanont"}]';
console.log('student:', jsonStudent);
console.log('type of student:', typeof jsonStudent);

var studentObj = JSON.parse(jsonStudent);
console.log('student obj:', studentObj);
console.log('type of student obj:', typeof studentObj);
