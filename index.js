'use strict';

// Will need to grab data from entry field and create a new entry on list. Hitting enter or clicking submit works.
function enterData () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const inputField = $('#shopping-list-entry').val();

        $('.shopping-list').append(`<li><span class="shopping-item">${inputField}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    })
}

//used for checking, unchecking, and deleting items.  Will need some event delegation for new entries.
function editItems() {



    //I could not quite figure out how to make the class with 'shopping-item__checked' (milk) toggle-able.  I suspect I need a better traversal method. This works for all other items.
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').toggleClass('shopping-item__checked');
    })

    $('.shopping-list').on('click', '.shopping-item-delete', function () {
        $(this).closest('li').remove();
    })
}


$(enterData);
$(editItems);


// Requirements
// In terms of user experience, your shopping list app must allow users to:
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

// In this challenge, you'll take your first stab at creating an interactive app from the ground up. Your challenge is to create an application that allows users to add, check, uncheck, and remove items from a shopping list. You'll submit your work to the grading team for feedback.

// To complete this challenge requires:
// Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
// Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
// Linking to your application JavaScript file from the index.html page.
// Using this and event delegation

//Finished:
// XX You must use a CDN-hosted version of jQuery 
// XX Put your application code in a file called index.js and link to it in index.html
// XX Be sure to put both script elements at the bottom of the <body> element.
// XX enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button