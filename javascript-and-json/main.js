var books = [
  {
  isbn: '11111',
  title: "Book One",
  author: "John Smith",
},
{
  isbn: '22222',
  title: "Book Two",
  author: "Jane Smith",
},
{
  isbn: '33333',
  title: "Book Three",
  author: "Bob Smith",
},
];
console.log("books: ", books, "typeof books: ", typeof books);

var stringifyBooks = JSON.stringify(books);
console.log('value of stringifyBooks: ', stringifyBooks, 'typeof stringifyBooks', typeof stringifyBooks);

var student = {
  "id": 12345,
  "name": "John Smith"
};
var studentString = JSON.stringify(student);
console.log("value of studentString: ", studentString, "typeof studentString: ", typeof studentString);

var studentJSON = JSON.parse(studentString);
console.log("value of studentJSON: ", studentJSON, "typeof studentJSON: ", typeof studentJSON);
