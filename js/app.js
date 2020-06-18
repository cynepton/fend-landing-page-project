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
    listItem.setAttribute('id', `listItem${iterator}`)
    listItem.textContent = `${iterator}`;

    sectionAnchor.appendChild(listItem);
}

/**
 * This function creates an array of the sections and their distances from the top of the viewport
*/
function getTopDistanceArray() {
    let topDistances = [];
    sections.forEach(element => {
        let distanceValue = element.getBoundingClientRect().top;
        topDistances.push(distanceValue);
    });
    return topDistances;
}

/**
 * This function takes the topDistances array and uses it to find which one is the active class and then populates the right section with this value
 */
function setActiveClass() {
    let activeIndex = 1;
    let topDistanceArray = getTopDistanceArray();
    let activeRegionBottom = 0.6 * window.innerHeight;
    let activeRegionTop = -0.4 * window.innerHeight;
    // let viewportHeight = window.innerHeight;

    for (let i = 0; i < topDistanceArray.length; i++) {
        if (topDistanceArray[i] > activeRegionTop) {
            // activeIndex = i+1
            if (topDistanceArray[i] < activeRegionBottom) {
                activeIndex = i+1                
            } 
        }
    }
    let activeSection = document.querySelector(`#section${activeIndex}`);
    let activeNavList = document.querySelector(`#listItem${activeIndex}`);
    // console.log(activeIndex);
    for (let i = 0; i < sections.length; i++) {
        if (i+1 == activeIndex) {
            activeSection.classList.add('your-active-class');
            activeNavList.classList.add('activeNavItem');
        } else {
            document.querySelector(`#section${i+1}`).classList.remove('your-active-class');
            document.querySelector(`#listItem${i+1}`).classList.remove('activeNavItem');
        }
        
    }
    
}

/*if (topDistanceArray[i] > -1*activeRegion) {
    if (topDistanceArray[i] < activeClass) {
        activeClass = topDistanceArray[i];
        index = i + 1;

        activeSection = document.querySelector(`#section${index}`);
        activeNavList = document.querySelector(`#listItem${index}`);

        activeSection.classList.add('your-active-class');
        activeNavList.classList.add('activeNavItem');
    }
} else {
    document.querySelector(`#section${i+1}`).classList.remove('your-active-class');
    document.querySelector(`#listItem${i+1}`).classList.remove('activeNavItem');
}*/

// build the nav
for (let i = 0; i < secLength; i++) {
    addListItem(i+1);
}

/**
 * Event listeners
*/
document.addEventListener("scroll", setActiveClass);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event




// Build menu

// Scroll to section on link click

// Set sections as active