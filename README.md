# Sales & Inventory App

## Description
A simple desktop-only web app designed for a small music school business. It is meant to help the receptionist/sales person at the music school be able to do the following things:
* quickly calculate total costs (subtotal + tax) for the different items the music school sells
* easily view price information of an item by selecting it from a drop-down menu
* easily view and update the stock/inventory of items currently for sale

## Background & Motivation
The idea for this particular project emerged from a real-life need for such a tool at a music school that I work at. Our receptionist happens to not be very good at math, and so I thought having the ability to do quick calculations by entering a few inputs would make things easier for her. This was the primary motivation for the project. As I began coding it, I also had the idea of adding an inventory section to it as well.

In terms of learning, I thought this project would be a great opportunity to continue improving my layout skills with CSS as well as my data manipulation with JavaScript.

## Technologies
The current version of this project was done with: 
* HTML 
* CSS
* JavaScript (classes, forEach method)
* Local Storage (in progress)
If the app proves useful and we have ideas for more features, I might re-design it in React with components.

## State of Completion
All the main features are currently working except for the inventory storage/update. Once I get accurate inventory for all the books currently in stock (current numbers are just dummy data), I plan to use Local Storage to store this information and update it accordingly. I have also not yet implemented the functionality of the button that is supposed to decrease the number of items currently in stock. Again, this will come once the latest inventory data is received.

## Learning Lessons & Challenges
### Using Classes
This was a great use-case for Classes. Because the music school sells many music books, I used a class constructor to create a Book Class, and then created an object for each of the books by instatiating a new book from the Book Class. Will do the same for any other type of product we might sell in the future.

### Generating the inventory table
One of the things that was a bit tricky to implement was the scrollable inventory list, which is part of the modal that pops up after clicking on the "Books" button in the Inventory section. I wanted the book items to be nicely organized in a table, and it took me a bit of time to figure out how to dynamically generate this table with JavaScript. I had orginally hard-coded the table in HTML just to get the basic look. This wasn't very efficient of course, so I then used a forEach method to loop though the books object array and output the html for the table.

### Implementing Local Storage
This is a great opportunity to refresh my knowledge of Local Browser Storage and how to use it to good effect with simple apps such as this one.


## Summary
This was a fun little project to make and what I especially liked about it as that it solved a real-world problem. I would like to continue to improve it as time goes by and based on feedback from the receptionist/sales person who uses it.




