import { booksArray } from './inventoryBooks.js';
import { notebooksArray } from './inventoryNotebooks.js';

//SELECT DOM ELEMENTS

//Input Fields
const inputSubtotal = document.querySelector('#input-subtotal');
const selectTax = document.querySelector('#select-tax');
const selectItem = document.querySelector('#select-item');

//Output Fields
const currentDate = document.querySelector('#current-date');
const showSubtotal = document.querySelector('#show-subtotal');
const showTax = document.querySelector('#show-tax');
const showTotal1 = document.querySelector('#show-total-1');
const showTotal2 = document.querySelector('#show-total-2');
const showInventory = document.querySelector('#show-remaining-inventory');
const modal = document.querySelector('#modal');

//Buttons
const btnCalcTotal = document.querySelector('#btn-calc-total');
const btnShowTotal = document.querySelector('#btn-show-total');
const btnShowBooks = document.querySelector('#btn-inventory-books');
const btnShowNotebooks = document.querySelector('#btn-inventory-notebooks');
const btnShowOther = document.querySelector('#btn-inventory-other');
const btnSalesLog = document.querySelector('#btn-sales-log');
const btnResetLog = document.querySelector('#btn-sales-reset-log')



//Other Elements
const modalOverlay = document.querySelector('#modal-overlay');


//===================================================================================//

// EVENT LISTENERS

//Buttons
btnCalcTotal.addEventListener('click', calcTotal);
btnShowTotal.addEventListener('click', showItemInfo);
btnShowBooks.addEventListener('click', showModal);
btnShowNotebooks.addEventListener('click', showModal2);
btnShowOther.addEventListener('click', nothingToShow);
btnSalesLog.addEventListener('click', showModal4);
btnResetLog.addEventListener('click', resetSalesLog);

document.addEventListener('click', (e) => {
  if(e.target.className === 'btn-subtract-qty') {
  updateStorage(e)
  }
}
);

inputSubtotal.addEventListener('click', clearSubtotal);
modalOverlay.addEventListener('click', hideModal);
selectItem.addEventListener('click', clearItemInfoFields);


//===================================================================================//

//FUNCTIONS

//Show Date (temporarily commented out)

const date = new Date();
const dateFormatted = date.toLocaleString('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

function showDate() {
  currentDate.innerText = dateFormatted;
}

showDate();

function nothingToShow() {
  alert("No items here yet.")
}

function resetSalesLog() {
  const itemsSoldKeysArray = Object.keys(localStorage).filter(key => key.includes("_"));
  itemsSoldKeysArray.forEach(item => {
    localStorage.removeItem(item)
  })
  console.log("Sales Log has been reset!")
}


//MIDDLE SECTION
//Show books from dropdown menu
let options = '';

booksArray.forEach((book) => {
  options += `<option>${book.title}</option>`;
});

selectItem.innerHTML = options;

//Calculate total cost (subtotal + tax)
function calcTotal() {
  const subtotal = +inputSubtotal.value;
  const tax = +selectTax.value;
  const total = subtotal * tax;
  showTotal1.innerText = `$${total.toFixed(2)}`;
}

//Clear subtotal and total fields
function clearSubtotal() {
  inputSubtotal.value = showTotal1.innerText = '';
  this.placeholder = "";
}

//Show item subtotal, tax, total, and remaining stock
function showItemInfo() {
  let item = selectItem.value;

  const bookSelected = booksArray.find((book) => book.title === item);
  // console.log(bookSelected);

  showSubtotal.innerHTML = `$${bookSelected.price}`;
  showTax.innerHTML = `${bookSelected.tax * 100}%`;
  const totalCost = bookSelected.price * bookSelected.tax + bookSelected.price;
  showTotal2.innerHTML = `$${totalCost.toFixed(2)}`;
  showInventory.innerText = localStorage.getItem(bookSelected.title);
}

//Clear item info fields
function clearItemInfoFields() {
  showSubtotal.innerHTML =
    showTax.innerHTML =
    showTotal2.innerHTML =
    showInventory.innerHTML =
      '';
}


//LOWER SECTION - INVENTORY

//Add book key-value pairs to storage only if they don't already exist
booksArray.forEach(book => {
  if(!localStorage.getItem(book.title)) {
    localStorage.setItem(book.title, book.quantity);
}})

notebooksArray.forEach(notebook => {
  if(!localStorage.getItem(notebook.title)) {
    localStorage.setItem(notebook.title, notebook.quantity);
}})


//Show pop-up modal with book inventory table
function showModal() {
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  showBookInventory();
}

function showModal2() {
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  showNotebookInventory();
}

function showModal4() {
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  showSalesRecord();
}



//Hide pop-up modal with book inventory table
function hideModal() {
  modalOverlay.classList.add('hidden');
  modal.classList.add('hidden');
}

const date2 = new Date();
let dateFormatted2 = date2.toLocaleString('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});

// console.log(dateFormatted2)



//Update item stock in localStorage and the UI
function updateStorage(e) {
  const targetBook = e.target.parentElement.parentElement.children[1].innerText;
  const currentStock = e.target.parentElement.parentElement.children[2].innerText;
  localStorage.setItem(targetBook, currentStock - 1)
  e.target.parentElement.parentElement.children[2].innerText = localStorage.getItem(targetBook);
  if(localStorage.getItem(targetBook) === "0") {
    e.target.parentElement.parentElement.className="row-red"
  } else if(localStorage.getItem(targetBook) === "1") {
    e.target.parentElement.parentElement.className="row-yellow"
  } else {
    e.target.parentElement.parentElement.className="row-green"
  }
  
  if(localStorage.getItem(targetBook) === "0") {
    e.target.parentElement.firstChild.disabled = "true"
  }
  recordSale(targetBook)
}



function recordSale(item) {
  let unique = Math.floor(Math.random() * 200);
  console.log(unique)
  localStorage.setItem(`${item}_${unique}`, dateFormatted)
}



//SHOW INVENTORY TABLE FOR BOOKS
function showBookInventory() {

  modal.innerHTML = '';

  let html = `
  <table id="inventory-table">
  <thead>
  <tr>
  <th>Item #</th>
  <th>Book Title</th>
  <th>Quantity in Stock</th>
  <th>Update Stock</th>
  <th>Price</th>
  </tr>
  </thead>
  <tbody>
  `;


  booksArray.forEach((book, index) => {


    let zeroExists = localStorage.getItem(book.title) === "0";
    let oneExists = localStorage.getItem(book.title) === "1";

    html += `
    <tr class="${zeroExists ? "row-red" : oneExists ? "row-yellow" : "row-green"}">
    <td>${index + 1}</td>
    <td >${book.title}</td>
    <td>${
      localStorage.getItem(book.title)
    }</td>
    <td><button class="btn-subtract-qty" ${zeroExists && "disabled"}>subtract</button></td>
    <td>$${book.price.toFixed(2)}</td>
    </tr>
    `;
  });

  html += `
    </tbody>
    </table>
    `;

  modal.insertAdjacentHTML('afterbegin', html);

}

//SHOW INVENTORY TABLE FOR NOTEBOOKS
function showNotebookInventory() {

  modal.innerHTML = '';

  let html = `
  <table id="inventory-table">
  <thead>
  <tr>
  <th>Item #</th>
  <th>Notebook Name</th>
  <th>Quantity in Stock</th>
  <th>Update Stock</th>
  <th>Price</th>
  </tr>
  </thead>
  <tbody>
  `;

  notebooksArray.forEach((notebook, index) => {

    let zeroExists = localStorage.getItem(notebook.title) === "0";
    let oneExists = localStorage.getItem(notebook.title) === "1";

    html += `
    <tr class="${zeroExists ? "row-red" : oneExists ? "row-yellow" : "row-green"}">
    <td>${index + 1}</td>
    <td >${notebook.title}</td>
    <td>${
      localStorage.getItem(notebook.title)
    }</td>
    <td><button class="btn-subtract-qty" ${zeroExists && "disabled"}>subtract</button></td>
    <td>$${notebook.price.toFixed(2)}</td>
    </tr>
    `;
  });

  html += `
    </tbody>
    </table>
    `;

  modal.insertAdjacentHTML('afterbegin', html);

}





//SHOW SALES LOG
function showSalesRecord() {

  const itemsSoldKeysArray = Object.keys(localStorage).filter(key => key.includes("_"))
  console.log(itemsSoldKeysArray)


  modal.innerHTML = '';

  let html = `
  <table id="inventory-table">
  <thead>
  <tr>
  <th>Item #</th>
  <th>Date Sold</th>
  <th>Item Sold</th>
  </tr>
  </thead>
  <tbody>
  `;

  
  itemsSoldKeysArray.forEach((item, index) => {


    html += `
    <tr class="row-green">
    <td>${index + 1}</td>
    <td>${item.split("_")[0]}</td>
    <td>${
      localStorage.getItem(item)
    }</td>
    </tr>
    `;
  });

  html += `
    </tbody>
    </table>
    `;

  modal.insertAdjacentHTML('afterbegin', html);

}
