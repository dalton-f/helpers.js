function getById(id) {
  return document.getElementById(id);
}

function getMany(selector) {
  return document.querySelectorAll(selector);
}

function getOne(selector) {
  return document.querySelector(selector);
}

function addClass(element, classes) {
  return element.classList.add(classes);
}

function removeClass(element, classes) {
  return element.classList.remove(classes);
}
