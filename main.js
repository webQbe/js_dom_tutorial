// Final Project

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// add item event
form.addEventListener('submit', addItem);

// delete item event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);



// Add item
function addItem(e){

    e.preventDefault(); // prevent form submission

    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    // add class to li element
    li.className = 'list-group-item';

    // add input value to li element
    li.appendChild(document.createTextNode(newItem));

    // append li element to list
    itemList.appendChild(li);

    // Create delete button
    var delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));

    // append delBtn to list
    li.appendChild(delBtn);

}

// Remove item
function removeItem(e){

    // check if only delete button is clicked
    if(e.target.classList.contains('delete')){

        // show confirm box
        if(confirm('Are you sure?')){

            // get element to be deleted
            var li = e.target.parentElement;

            // delete
            itemList.removeChild(li);

        }

    }

}

// Filter items
function filterItems(e){

    // convert input text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);

    // get all li elements
    var items = itemList.getElementsByTagName('li');
    console.log(items);
    
    // convert items (html collection) to an array
    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent;
        // console.log(itemName);

        // convert item name to lowercase & compare item name with input text
        // != (not equal) to -1 means a match
        if(itemName.toLowerCase().indexOf(text) != -1){

            // display item
            item.style.display = 'block';

        } else {

            // do not display
            item.style.display = 'none';

        }

    })
}