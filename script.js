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
const showRemainingStock = document.querySelector('#show-remaining-stock');

//Buttons
const btnCalcTotal = document.querySelector('#btn-calc-total');
const btnShowTotal = document.querySelector('#btn-show-total');
const btnShowBooks = document.querySelector('#btn-inventory-books');
const btnShowNotebooks = document.querySelector('#btn-inventory-notebooks');
const btnShowOther = document.querySelector('#btn-inventory-other');
const btnSalesLog = document.querySelector('#btn-sales-log');
const btnResetSalesLog = document.querySelector('#btn-sales-reset-log');

//Other Elements
const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');


//===================================================================================//

// EVENT LISTENERS

btnCalcTotal.addEventListener('click', calcTotal);
btnShowTotal.addEventListener('click', showItemInfo);
btnShowBooks.addEventListener('click', showBookModal);
btnShowNotebooks.addEventListener('click', showNotebookModal);
btnSalesLog.addEventListener('click', showSalesModal);
btnResetSalesLog.addEventListener('click', resetSalesLog);
btnShowOther.addEventListener('click', nothingToShow);
inputSubtotal.addEventListener('click', clearSubtotal);
modalOverlay.addEventListener('click', hideModal);
selectItem.addEventListener('click', clearItemInfoFields);
document.addEventListener('click', e => updateStorage(e));


//===================================================================================//


//CODE BY SECTIONS (TOP, MIDDLE, BOTTOM)

//TOP SECTION CODE

const date = new Date();
const dateFormatted = date.toLocaleString('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

(function showDate() {
  currentDate.innerText = dateFormatted;
})();


//===================================================================================//


//MIDDLE SECTION CODE

//Show books from dropdown menu
let options = '';

booksArray.forEach((book) => {
  options += `<option>${book.title}</option>`;
});

selectItem.innerHTML = options;

//MIDDLE SECTION FUNCTIONS

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
  showSubtotal.innerHTML = `$${bookSelected.price}`;
  showTax.innerHTML = `${bookSelected.tax * 100}%`;
  const totalCost = bookSelected.price * bookSelected.tax + bookSelected.price;
  showTotal2.innerHTML = `$${totalCost.toFixed(2)}`;
  showRemainingStock.innerText = localStorage.getItem(bookSelected.title);
}

//Clear item info fields
function clearItemInfoFields() {
  showSubtotal.innerHTML =
    showTax.innerHTML =
    showTotal2.innerHTML =
    showRemainingStock.innerHTML =
      '';
}


//===================================================================================//


//BOTTOM SECTION CODE

//Add item key-value pairs to localStorage only if they don't already exist
booksArray.forEach(book => {
  if(!localStorage.getItem(book.title)) {
    localStorage.setItem(book.title, book.quantity);
}})

notebooksArray.forEach(notebook => {
  if(!localStorage.getItem(notebook.title)) {
    localStorage.setItem(notebook.title, notebook.quantity);
}})


//BOTTOM SECTION FUNCTIONS


//MODAL FUNCTIONS
//Show modals
function showBookModal() {
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  showBookInventory();
}

function showNotebookModal() {
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  showNotebookInventory();
}

function showSalesModal() {
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  showSalesRecord();
}

//Hide modals
function hideModal() {
  modalOverlay.classList.add('hidden');
  modal.classList.add('hidden');
}

//Update item stock in localStorage and the UI when user clicks on "Subtract" button in inventory table
function updateStorage(e) {
  if(e.target.className === 'btn-subtract-qty') {
  const targetBook = e.target.parentElement.parentElement.children[1].innerText;
  const currentStock = e.target.parentElement.parentElement.children[2].innerText;
  localStorage.setItem(targetBook, currentStock - 1)
  e.target.parentElement.parentElement.children[2].innerText = localStorage.getItem(targetBook);
  if(localStorage.getItem(targetBook) === "0") {
    e.target.parentElement.parentElement.className="row-red";
    e.target.parentElement.firstChild.disabled = "true"
  } else if(localStorage.getItem(targetBook) === "1") {
    e.target.parentElement.parentElement.className="row-yellow"
  } else {
    e.target.parentElement.parentElement.className="row-green"
  }
  //Record each transaction in Sales Log
  recordSale(targetBook)
}}

//Each key in local storage has to be unique, otherwise it's overwritten. Math.random() used to help with unique key
function recordSale(item) {
  let unique = Math.floor(Math.random() * 200);
  localStorage.setItem(`${item}_${unique}`, dateFormatted)
}

function resetSalesLog() {
  const itemsSoldKeysArray = Object.keys(localStorage).filter(key => key.includes("_"));
  itemsSoldKeysArray.forEach(item => {
    localStorage.removeItem(item)
  })
}

function nothingToShow() {
  alert("No items here yet.")
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

  modal.innerHTML = '';

  let html = `
  <table id="inventory-table">
  <thead>
  <tr>
  <th>Item #</th>
  <th>Item Sold</th>
  <th>Date Sold</th>
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
