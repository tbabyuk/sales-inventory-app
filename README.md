# Sales & Inventory App

See it live: [Sales & Inventory App](https://tranquil-quokka-7b82d5.netlify.app/)

## Description
A desktop-only web app designed for a small music school business. It is meant to help the receptionist/sales person at the music school be able to do the following things:
* quickly calculate total costs (subtotal + tax) for the different items the music school sells
* easily view price and stock quantity information of an item by selecting it from a drop-down menu
* view and update list of items currently available in stock to help keep track of inventory
* view a sales log of items that were sold on a particular day and be able to reset this log at any time

## Background & Motivation
The idea for this particular project emerged from a real-life need for such a tool at a music school that I work at. Our receptionist happens to not be very good at math, and so I thought having the ability to do quick calculations by entering a few inputs would make things easier for her. This was the initial motivation behind this project, but as I began coding it, I also had the idea of adding an inventory section to it. That way, we could know at a glance what items and how many of them we had in stock without having to go and physically check the stock room.

In terms of learning, I thought this project would be a great opportunity to continue improving my layout skills with CSS, data manipulation with JavaScript, and get more comfortable working with localStorage, which played a central role in this project.

## Technologies
The current version of this project was done with: 
* HTML 
* CSS
* JavaScript
* Local Storage

If the app proves useful and we have ideas for more features, I might re-design it in React with components.

## State of Completion
Completed. There is currently only one item under "Notebooks" and none yet under "Other", but lots of books under the "Books" inventory. This is all real data from the music school business and will be updated as more products are added for sale.

## Learning Lessons & Challenges
### Implementing Local Storage
Local Storage is the main tool I used here to persist app data, and it was at times tricky to figure out the best way to do this. As an example, I had to figure how to avoid overwriting stock quantity for a particular item after it was manually updated by the user. I did this by first checking if a key for a particular item name already exists in localStorage, and if it doesn't, to create such a key. This means that every time the app is started up, it will iterage through the item array and create key-value pairs only for items for which stock quantity has not been changed (i.e. the ones that doesn't already exist in localStorage).

The other big challenge was implementing the "Sales Log" feature. The idea behind the "Sales Log" was to keep a record of the name of each item that was purchased as well as the date when it was purchased. For this data to persist, I needed to give each item a unique key (it couldn't be the same as the key for the regular item) before storing it, and then retrieve these keys from the localStorrage array. My unique key ended up being a combination of the original item name and a random number between 0 and 200, joined by a "_". Although the math.Random method is not ideal for generating a unique key (and risks duplicates), I thought this was a good enough method for this particular project. To display a list of purchased items, I then used the .filter() method to find only keys that included an underscore in them and display them in the table.

### Generating the inventory table
One of the things that was a bit tricky to implement was the scrollable inventory list, which is part of the modal that pops up after clicking on the "Books" (and "Notebooks") button in the Inventory section. I wanted the book items to be nicely organized in a table, and it took me a bit of time to figure out how to dynamically generate this table with JavaScript. I had orginally hard-coded the table in HTML just to get the basic look and later used a forEach method to loop though the books object array and output the html for the table. I am also very pleased with the color theme I implemented to help see at a glance whenever we are low on stock. An item row turns yellow when the stock is at "1" and red when it's at "0". Othwerwise, the row is green.

### Using Classes for sale items
This project was a great use-case for Classes. Because the music school sells many music books, I used a class constructor to create a Book Class, and then created an object for each of the books by instatiating a new book from the Book Class. I did the same with the Notebook class.

## Summary
This was a fun little project to make and what I especially liked about it is that it solved a real-world problem. I would like to continue to improve it as time goes by and based on feedback from the receptionist/sales person who uses it.




