// const parentUL = document.querySelector('ul');
// const newLI = document.createElement('li');
// newLI.innerText = 'I AM A NEW LIST ITEM!';

// //prepend will add newLI as the FIRST child of parentUL
// parentUL.prepend(newLI) //Doesn't work in IE!

// //We can also insert something BEFORE another element, using insertBefore.
// // First, select the element to insert before:
// const targetLI = document.querySelectorAll('li.todo')[2] //3rd li with class of 'todo'
// // To insert our new LI before targetLI...
// //parent.insertBefore(what to insert, where to insert)
// parentUL.insertBefore(newLI, targetLI);
const parentUl = document.querySelector("ul");
console.log(parentUl);
const newLi = document.createElement("li");
newLi.innerText = "I am a new Li";
// parentUl.appendChild.newLi;
// parentUl.replaceChild(newLi);
parentUl.appendChild(newLi);
const firstLi = document.querySelector("li.todo");
console.log(firstLi);
