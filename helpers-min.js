(getById = (e) => document.getElementById(e)),
  (getMany = (e) => document.querySelectorAll(e)),
  (getOne = (e) => document.querySelector(e)),
  (addClass = (e, t) => e.classList.add(t)),
  (removeClass = (e, t) => e.classList.remove(t)),
  (toggleClass = (e, t) => e.classList.toggle(t)),
  (hasClass = (e, t) => e.classList.contains(t)),
  (getInnerText = (e) => e.innerText),
  (getInnerHTML = (e) => e.innerHTML),
  (setInnerText = (e, t) => (e.innerText = t)),
  (setInnerHTML = (e, t) => (e.innerHTML = t)),
  (createElement = (e) => document.createElement(e)),
  (removeChild = (e) => e.parentNode.removeChild(e)),
  (getParent = (e) => e.parentElement),
  (getChildren = (e) => e.children),
  (getNextSibling = (e) => e.nextElementSibling),
  (getPrevSibling = (e) => e.previousElementSibling),
  (getLocalStorage = (e) => localStorage.getItem(e)),
  (setLocalStorage = (e, t) => localStorage.setItem(e, t)),
  (clearLocalStorage = () => localStorage.clear()),
  (getTotal = (e) => (sum = e.reduce((e, t) => e + t, 0))),
  (getMax = (e) => Math.max(...e)),
  (getMin = (e) => Math.min(...e)),
  (getUniqueValues = (e) => [...new Set(e)]);
