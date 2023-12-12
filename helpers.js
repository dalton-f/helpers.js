// helpers.js v1.2.0 | https://github.com/dalton-f/helpers.js

getById = (id) => document.getElementById(id);

getMany = (selector) => document.querySelectorAll(selector);

getOne = (selector) => document.querySelector(selector);

addClass = (element, classes) => element.classList.add(classes);

removeClass = (element, classes) => element.classList.remove(classes);

toggleClass = (element, classes) => element.classList.toggle(classes);

getInnerText = (element) => element.innerText;

getInnerHTML = (element) => element.innerHTML;

getLocalStorage = (key) => localStorage.getItem(key);

setLocalStorage = (key, value) => localStorage.setItem(key, value);

getTotal = (array) =>
  (sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ));

hasClass = (element, className) => element.classList.contains(className);

setInnerText = (element, text) => element.innerText = text;

setInnerHTML = (element, html) => element.innerHTML = html;

removeLocalStorage = (key) => localStorage.removeItem(key);

clearLocalStorage = () => localStorage.clear();