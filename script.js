import { booksArray } from './inventory.js';

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



//Other Elements
const modalOverlay = document.querySelector('#modal-overlay');
const booksRemaining = document.querySelector("#qty-cell");
// const tableRow = document.querySelector(".table-row");

//===================================================================================//

// EVENT LISTENERS

//Buttons
btnCalcTotal.addEventListener('click', calcTotal);
btnShowTotal.addEventListener('click', showItemInfo);
btnShowBooks.addEventListener('click', showModal);
btnShowNotebooks.addEventListener('click', () =>
  alert('No items here yet! Sowwy!')
);
btnShowOther.addEventListener('click', () =>
  alert('No items here yet! Sowwy!')
);

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

function showDate() {
  const date = new Date();
  const dateFormatted = date.toLocaleString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  currentDate.innerText = dateFormatted;
}

showDate();


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

//Add book key-value pairs to storage only if one doesn't already exist
booksArray.forEach(book => {
  if(!localStorage.getItem(book.title)) {
    localStorage.setItem(book.title, book.quantity);
}})


//Show pop-up modal with book inventory table
function showModal() {
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  showBookInventory();
}

//Hide pop-up modal with book inventory table
function hideModal() {
  modalOverlay.classList.add('hidden');
  modal.classList.add('hidden');
}

//Update item stock in localStorage and the UI
function updateStorage(e) {
  const targetBook = e.target.parentElement.parentElement.children[1].innerText;
  const currentStock = e.target.parentElement.parentElement.children[2].innerText;
  localStorage.setItem(targetBook, currentStock - 1)
  e.target.parentElement.parentElement.children[2].innerText = localStorage.getItem(targetBook);
  if(localStorage.getItem(targetBook) <= "1") {
    e.target.parentElement.parentElement.className="row-red"
  } else {
    e.target.parentElement.parentElement.className="row-green"
  }
  
  if(localStorage.getItem(targetBook) === "0") {
    e.target.parentElement.firstChild.disabled = "true"
  }
}

//Show Inventory Table (modal)
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

const name = "Terry"

  booksArray.forEach((book, index) => {


    let zeroExists = localStorage.getItem(book.title) === "0";

    html += `
    <tr class="${zeroExists ? "row-red" : "row-green"}">
    <td>${index + 1}</td>
    <td >${book.title}</td>
    <td>${
      localStorage.getItem(book.title)
    }</td>
    <td><button class="btn-subtract-qty" ${zeroExists && "disabled"}>subtract</button></td>
    <td>$${book.price}</td>
    </tr>
    `;
  });

  html += `
    </tbody>
    </table>
    `;

  modal.insertAdjacentHTML('afterbegin', html);

}
