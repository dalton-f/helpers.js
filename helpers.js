// helpers.js | https://github.com/dalton-f/helpers.js

getById = (id) => document.getElementById(id);

getMany = (selector) => document.querySelectorAll(selector);

getOne = (selector) => document.querySelector(selector);

addClass = (element, classes) => element.classList.add(...classes);

removeClass = (element, classes) => element.classList.remove(...classes);

toggleClass = (element, classes) => element.classList.toggle(...classes);

hasClass = (element, classes) => element.classList.contains(classes);

getInnerText = (element) => element.innerText;

getInnerHTML = (element) => element.innerHTML;

setInnerText = (element, text) => (element.innerText = text);

setInnerHTML = (element, html) => (element.innerHTML = html);

createElement = (tagName) => document.createElement(tagName);

deleteElement = (element) => element.remove();

getParent = (element) => element.parentNode;

getChildren = (element) => element.children;

getNextSibling = (element) => element.nextSibling;

getPrevSibling = (element) => element.previousSibling;

// Storage

getLocalStorage = (key) => localStorage.getItem(key);

setLocalStorage = (key, value) => localStorage.setItem(key, value);

clearLocalStorage = () => localStorage.clear();

// Array Manipulation

getTotal = (array) =>
  (sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ));

getMax = (array) => Math.max(...array);

getMin = (array) => Math.min(...array);

getUniqueValues = (array) => [...new Set(array)];
