// Mouse Events

var button = document.getElementById('button');
var box = document.getElementById('box');

function runEvent(e){
    // print event type
    console.log('Event Type: ' + e.type);

    // output mouse position inside div#output
    output.innerHTML = '<h3>Mouse X: '+e.offsetX+'</h3><br><h3>Mouse Y: '+e.offsetY+'</h3>';

    // change #box bg color with mouse position
    //box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";

    // change body bg color with mouse position
    document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
}



// mousemove
box.addEventListener('mousemove', runEvent);

// mouseenter
// checks parent element 
box.addEventListener('mouseenter', runEvent);

// mouseover
// checks inner elements
box.addEventListener('mouseover', runEvent);

// mouseleave
// checks parent element 
box.addEventListener('mouseleave', runEvent);

// mouseout 
// used for inner elements
box.addEventListener('mouseout', runEvent);

//button.addEventListener('click', runEvent);

// double click
// button.addEventListener('dblclick', runEvent);

// mousedown
// button.addEventListener('mousedown', runEvent);

// mouseup
// button.addEventListener('mouseup', runEvent);























/* // Button Click Events

// log message when button is clicked

// <button onclick="buttonClick(1)">
// function buttonClick(){
//    console.log('Button Clicked!');
// }

// using a selector and addEventListener()
// var button = document.getElementById('button').addEventListener('click', function(){
//    console.log('123');
// });

// calling existing function
var button = document.getElementById('button').addEventListener('click', buttonClick);

// modify element properties with DOM
//function buttonClick(){
//    console.log('Button Clicked!');
//    document.getElementById('header-title').textContent = 'Changed';
//    document.getElementById('main').style.backgroundColor = '#f4f4f4';
//}

// log an event
function buttonClick(e){
    // console.log(e);

    // get element clicked
    // console.log(e.target);

    // get target's id
    console.log(e.target.id);

    // get target's class
    console.log(e.target.className);

    // get target's class list
    console.log(e.target.classList); 

    // output to DOM
    var output = document.getElementById('output');
    output.innerHTML = '<h3>' + e.target.id + '</h3>';

    // show type of event
    console.log(e.type);

    // mouse positon x of window
    console.log('mouse positon x: ' + e.clientX);

    // mouse positon y of window
    console.log('mouse positon y: ' + e.clientY);

    // get mouse position x of button
    console.log(e.offsetX);

    // get mouse position y of button
    console.log(e.offsetY);

    // check if Alt key is pressed
    console.log(e.altKey);

    // check if Ctrl key is pressed
    console.log(e.ctrlKey);

    // check if Shift key is pressed
    console.log(e.shiftKey);
} */

/* // Creating Elements

// createElement

// create a div
var newDiv = document.createElement('div');
console.log(newDiv);


// add a class to div
newDiv.className = 'hello';

// add an id
newDiv.id = 'hello1';

// add attribute 
// with setAttribute(attr name, value)
newDiv.setAttribute('title', 'Hello Div');

// Create a text node
var newDivText = document.createTextNode('Hello World!');

// Add newDivText to newDiv
newDiv.appendChild(newDivText);



// Add newDiv to DOM(page)

// select container class inside header
var container = document.querySelector('header .container');

// select h1 inside header
var h1 = document.querySelector('header h1');

// insert newDiv
// insertBefore(element to be inseted, before which element)
container.insertBefore(newDiv, h1);

// style newDiv
newDiv.style.fontSize = '30px'; */

/* // Traversing DOM
// parents, childs and siblings

// Siblings

var itemList = document.querySelector('#items');

// nextSibling
// get same level next element
// Cons: this also retuns line breaks (#text "\n) of the list
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
// get same level previous element
// Cons: this also retuns line breaks (#text "\n) of the list
console.log(itemList.nextSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);

// style previousElementSibling
itemList.previousElementSibling.style.color = 'green';
 */

/* // childNodes

var itemList = document.querySelector('#items');

// get child nodes
// Cons: this also retuns line breaks (#text "\n) of the list
console.log(itemList.childNodes);

// children
console.log(itemList.children);

// access specific child
console.log(itemList.children[1]);

// style a child
itemList.children[1].style.backgroundColor = 'yellow';


// firstChild
// Cons: this also retuns line breaks (#text "\n) of the list
console.log(itemList.firstChild);


// firstElementChild
// this returns actual elements
console.log(itemList.firstElementChild);

// change firstElementChild text
itemList.firstElementChild.textContent = "Hello 1";


// lastChild
// Cons: this also retuns line breaks (#text "\n) of the list
console.log(itemList.lastChild);

// lastElementChild
// this returns actual elements
console.log(itemList.lastElementChild);

// change lastElementChild text
itemList.lastElementChild.textContent = "Hello 4"; */

/* // parentNode

var itemList = document.querySelector('#items');

// get the parent node of itemList
// ul#items is inside div#main
console.log(itemList.parentNode);

// style parentNode
itemList.parentNode.style.backgroundColor = '#f4f4f4';

// get parent of parentNode
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// you can also use parentElement instead of parentNode

*/

/* // QuerySelectorAll
// selects more than one element

// get elements of the same class
// this returns NodeList
var titles = document.querySelectorAll('.title');
console.log(titles);

// change text
titles[0].textContent = 'Hello';

// apply style to every other list item

// get list items with odd numbers
var odd = document.querySelectorAll('li:nth-child(odd)')

// get list items with even numbers
var even = document.querySelectorAll('li:nth-child(even)')

// loop through each list item & apply style
for(i = 0; i < odd.length; i++){

    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';

}*/

/* // QuerySelector
// only used to select one (first) item

// change header style
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

// add value to input
var input = document.querySelector('input') // gets first input tag
input.value = 'Hello World';

// select element by attribute
var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';


// apply style to list items

// apply style to first item
var item = document.querySelector('.list-group-item');
item.style.color = 'red'; 

// apply style to last item
var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue';

// apply style to 2nd item
var secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = 'coral';

// css psuedo selectors - .list-group-item:nth-child */

/* // getElementbyTagName Selector

// get all <li> tags
var li = document.getElementsByTagName('li');
console.log(li);

// select one item
console.log(li[1]);

// change selected item's text
li[1].textContent = 'Hello 2';

// change selected item's style
// camel case: fontWeight, backgroundColor
li[1].style.fontWeight = 'bold'; 
li[1].style.backgroundColor = 'yellow'; 

// try to change style of all items
// li.style.backgroundColor = 'f4f4f4'; // ERROR

// loop through items list & apply style to each item
for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'f4f4f4'; 
}  */

/* // getElementbyClassName Selector

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
} */

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