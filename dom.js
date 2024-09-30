// getElementbyClassName Selector

var items = document.getElementsByClassName('list-group-item');
console.log(items);

// select one item
console.log(items[1]);

// change selected item's text
items[1].textContent = 'Hello 2';

// change selected item's style
// camel case: fontWeight, backgroundColor
items[1].style.fontWeight = 'bold'; 
items[1].style.backgroundColor = 'yellow'; 

// try to change style of all items
// items.style.backgroundColor = 'f4f4f4'; // ERROR

// loop through items list & apply style to each item
for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'f4f4f4'; 
}






/* // getElementbyId Selector

// console.log(document.getElementById('header-title'));

// put selected element inside a variable
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

// change selected element's text
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';


// <h1 id="header-title">Item Lister <span style="display: none;">123</span></h1>

// textContent
console.log(headerTitle.textContent); // ignores css rules & displays 123

// innerText
console.log(headerTitle.innerText); // checks css rules & 123 not displayed


// Add HTML
// headerTitle.innerHTML = '<h3>Hello</h3>'; 

// Add / Change style
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'; */

/* // Examining Document Object

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
console.log(document.images); */