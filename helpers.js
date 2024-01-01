// helpers.js v1.3.0 | https://github.com/dalton-f/helpers.js

// DOM Manipulation

getById = (id) => document.getElementById(id);

getMany = (selector) => document.querySelectorAll(selector);

getOne = (selector) => document.querySelector(selector);

addClass = (element, classes) => element.classList.add(classes);

removeClass = (element, classes) => element.classList.remove(classes);

toggleClass = (element, classes) => element.classList.toggle(classes);

hasClass = (element, classes) => element.classList.contains(classes);

getInnerText = (element) => element.innerText;

getInnerHTML = (element) => element.innerHTML;

setInnerText = (element, text) => (element.innerText = text);

setInnerHTML = (element, html) => (element.innerHTML = html);

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

getMax = (array) => array.reduce((max, item) => Math.max(max, item), -Infinity);

getMin = (array) => array.reduce((max, item) => Math.min(max, item), -Infinity);

getUniqueValues = (array) => [...new Set(array)];
