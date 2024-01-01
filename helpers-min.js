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
  (getLocalStorage = (e) => localStorage.getItem(e)),
  (setLocalStorage = (e, t) => localStorage.setItem(e, t)),
  (clearLocalStorage = () => localStorage.clear()),
  (getTotal = (e) => (sum = e.reduce((e, t) => e + t, 0))),
  (getMax = (e) => e.reduce((e, t) => Math.max(e, t), -1 / 0)),
  (getMin = (e) => e.reduce((e, t) => Math.min(e, t), -1 / 0)),
  (getUniqueValues = (e) => [...new Set(e)]);