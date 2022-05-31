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
const btnSubtractQty = document.querySelector('.btn-subtract-qty');

//Other Elements
const modalOverlay = document.querySelector('#modal-overlay');

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
  if (e.target.className === 'btn-subtract-qty') {
    const target = e.target;
    const num = target.parentElement.firstChild;
    console.log(num);
  }
});

//Other
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
  showInventory.innerHTML = `${bookSelected.quantity}`;
}

//Clear item info fields
function clearItemInfoFields() {
  showSubtotal.innerHTML =
    showTax.innerHTML =
    showTotal2.innerHTML =
    showInventory.innerHTML =
      '';
}

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

//Show Inventory Table (modal)
function showBookInventory() {
  modal.innerHTML = '';

  let html = `
  <table id="inventory-table">
  <thead>
  <tr>
  <th>Item #</th>
  <th>Book Title</th>
  <th>Qty in Stock</th>
  <th>Price</th>
  </tr>
  </thead>
  <tbody>
  `;

  booksArray.forEach((book, index) => {
    html += `
    <tr>
    <td>${index + 1}</td>
    <td>${book.title}</td>
    <td class="qty-cell">${
      book.quantity
    }<button class="btn-subtract-qty">subtract</button></td>
    <td>$${book.price}</td>
    <tr
    `;
  });

  html += `
    </tbody>
    </table>
    `;

  modal.insertAdjacentHTML('afterbegin', html);
}
