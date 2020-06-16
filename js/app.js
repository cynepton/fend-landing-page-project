/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 *JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// Returns a nodelist of all sections
const sections = document.querySelectorAll("section");

// Number of sections
const secLength = sections.length;

// selects the navbar's unordered list tag within which the <li> tags would be placed 
const listParent = document.querySelector("#navbar__list");

/**
 * Helper Functions
 * 
*/


/**
 * Main Functions
 * 
*/
function addListItem (iterator) {
    const sectionAnchor = document.createElement('a');
    const anchorLink = `#section${iterator}`;
    sectionAnchor.setAttribute('href', anchorLink);

    listParent.appendChild(sectionAnchor);
    const listItem = document.createElement('li');
    listItem.setAttribute('id', `item${iterator}`)
    listItem.textContent = `${iterator}`;

    sectionAnchor.appendChild(listItem);
}

// build the nav
for (let i = 0; i < secLength; i++) {
    addListItem(i+1);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active