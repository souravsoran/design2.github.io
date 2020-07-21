console.log('WElcome to my firt javascript');
let a=document.all;

// Array.from(a).forEach(function(element){
//     console.log(element);
//  })
// console.log(a);


// DOM Selectors Used in Below:::
// 1.Single element selector
// 2.Multi element selectors



// #############--  Single element selector  --###############

// let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color= "red";
// element.innerText="hey good morning";
// element.innerHTML="my name is sourav kumar";
// console.log(element.innerHTML);

// -----------------------------------------------------
// let sel = document.querySelector('#second');
// let sel = document.querySelector('div');
// let sel = document.querySelector('h1');
// console.log(sel);

// ------------------------------------------------------


// ##########--  Multi element Selectors  --###################

// let elmt = document.getElementsByClassName('child');
// elmt = document.getElementsByClassName('container');
// console.log(elmt[0].getElementsByClassName('child'));
// elmt = document.getElementsByTagName('div');
// console.log(elmt);

// **  IMPORTANT  *****  we can use queryselectorall() Here *******

// ------------------ forEach loop Use------------

// Array.from(elmt).forEach(function(element){
//     console.log(element);
//     element.style.color = "blue";
// })

// ----------------------------------------------


// ##############-- traversing the DOM  --################

// let cont = document.querySelector('.newline');
// cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children);
// let nodename = cont.childNodes[0].nodeName;
// let nodename = cont.childNodes[1].nodeName;
// console.log(nodename);

// Node Types ---------------------

// 1. element
// 2. attribute
// 3. text node
// 8. comment
// 9. document
// 10. doctype


// let nodeType = cont.childNodes[0].nodeType;
// let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeType);

// ----------------------------------

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

// let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);

// console.log(container.children);
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);



// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.
//     nextElementSibling.nextElementSibling);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// ------------------------------------------------------
// Creating Elements , Removing And Replacing the elements
// ------------------------------------------------------


// let element = document.createElement('li');

// ---- Add a class name to a list element above given..------

// element.className = "new-list-item";
// element.id  = "list";
// element.setAttribute('title','mytitle');
// element.innerText = "thi is add new list";
// element.innerHTML = "<b>this is add new list</b>";

// let ul = document.querySelector('ul.this');
// ul.appendChild(element);
// console.log(ul);
// console.log(element);

// ------------------------------------
// both are same above and below given code;;
// -------------------------------------

// let element1 = document.createElement('li');
// let text = document.createTextNode('this is sixth new list');
// element1.appendChild(text);
// element1.className = "sixth-list-item";
// console.log(element1);
// let ul = document.querySelector('ul.this');
// ul.appendChild(element1);
// console.log(ul);

// ------------------------------------------------



