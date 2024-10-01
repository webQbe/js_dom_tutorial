// Final Project

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// add items to list
form.addEventListener('submit', addItem);

// delete items from list
itemList.addEventListener('click', removeItem);



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