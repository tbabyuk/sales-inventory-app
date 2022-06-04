class Notebook {
    constructor(title, price, tax, quantity) {
      this.title = title;
      this.price = price;
      this.tax = tax;
      this.quantity = quantity;
      }
  }


const notebook_dictation_48 = new Notebook('Music Dictation Book - 48 pgs', 3.30, 0.05, 2);

//Array with just one item for now, more to be added in the future
export const notebooksArray = [
    notebook_dictation_48
]
