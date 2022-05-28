// import { books } from "./books.js";


const todaysDate = document.querySelector("#todays-date");

const inputSubtotal = document.querySelector("#input-subtotal");
const selectTax = document.querySelector("#select-tax");
const showTotal1 = document.querySelector("#show-total-1");
const btnCalcTotal = document.querySelector("#btn-calculate-total");

const selectedItem = document.querySelector("#select-item");
const showSubtotal = document.querySelector("#show-subtotal");
const showTax = document.querySelector("#show-tax");
const showTotal2 = document.querySelector("#show-total-2")
const btnShowTotal = document.querySelector("#btn-show-total");

const btnShowBooks = document.querySelector("#btn-inventory-books");
const btnShowNotebooks = document.querySelector("#btn-inventory-notebooks");
const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay")

// FUNCTIONS
// function showDate() {
//     const date = new Date();
//     const dateFormatted = date.toLocaleString("en-US", {
//         weekday: "long",
//         month: "short",
//         day: "numeric",
//         year: "numeric"
//     });

//     todaysDate.innerText = dateFormatted;
// }

// showDate()

function getTotalPrice() {
    const subtotal = +inputSubtotal.value;
    const tax = +selectTax.value;
    const total = subtotal * tax;
    showTotal1.innerText = `$${total.toFixed(2)}`;
}

function showTotalPrice() {
    let item = selectedItem.value;


    function showItemInfo(subtotal, tax) {
        showSubtotal.innerText = `$${subtotal}`;
        showTax.innerText = `$${tax}`;
        const total = subtotal * tax;
        showTotal2.innerText = `$${total.toFixed(2)}`;
    }


    switch (item) {
        case "book-abc":
            showItemInfo(14.95, 1.05)
            break;
        case "book-rcm-piano-1-tech":
            showItemInfo(11.95, 1.05)
            break;
        case "book-rcm-piano-1-rep":
            showItemInfo(18.95, 1.05)
            break;
        case "book-rcm-piano-1-etu":
            showItemInfo(13.95, 1.05)
            break;
        case "book-rcm-piano-1-sight":
            showItemInfo(17.95, 1.05)
            break;
        case "book-rcm-1-theory":
            showItemInfo(17.95, 1.05)
            break;
        default:
            console.log("default")
            break;
    }
}

function showModal() {
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    console.log("clicked")
}

function hideModal() {
    modalOverlay.classList.add("hidden");
    modal.classList.add("hidden");
}




// EVENT LISTENERS
btnCalcTotal.addEventListener("click", getTotalPrice);
btnShowTotal.addEventListener("click", showTotalPrice);
btnShowBooks.addEventListener("click", showModal);
modalOverlay.addEventListener("click", hideModal);
btnShowNotebooks.addEventListener("click", showBooks)




//Just experimenting for now
const abc1 = {
    title: "ABC of Piano Playing (Book 1)",
    price: 14.95,
    quantity: 3
}

const abc2 = {
    title: "ABC of Piano Playing (Book 2)",
    price: 14.95,
    quantity: 3
}

const abc3 = {
    title: "ABC of Piano Playing (Book 3)",
    price: 14.95,
    quantity: 3
}


const booksArray = [abc1, abc2, abc3];


function showBooks() {
    const allbooks = booksArray.forEach(book => console.log(book.title))
}