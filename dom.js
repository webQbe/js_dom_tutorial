// Examining Document Object

// show properties and methods attached to Document Object
// console.dir(document);

// get domain
console.log(document.domain); // 127.0.0.1

// get url
console.log(document.URL);

// get title
console.log(document.title);

// change title
// document.title = '123';

// get doctype
console.log(document.doctype);

// get head element
console.log(document.head);

// get body element
console.log(document.body);

// get everything in DOM
console.log(document.all); // returned undefined

// select element from document.all 
console.log(document.all[9]);

// change text of selected element
// document.all[9].textContent = 'Hello'

// get all forms on the page
console.log(document.forms);

// get all links on the page
console.log(document.links);

// select first element
console.log(document.forms[0]);

// select first element
console.log(document.images);