// helpers.js https://github.com/dalton-f/helpers.js

// DOM Manipulation Helpers

/**
 * Get all elements matching a CSS selector.
 * @param {string} selector - The CSS selector to match elements.
 * @returns {NodeList} A NodeList of matching elements.
 */
export const findMany = (selector, context = document) =>
  context.querySelectorAll(selector);

/**
 * Get the first element matching a CSS selector.
 * @param {string} selector - The CSS selector to match the element.
 * @returns {HTMLElement} The first matching element.
 */
export const find = (selector, context = document) =>
  context.querySelector(selector);

/**
 * Add one or more classes to an element.
 * @param {HTMLElement} element - The element to which the class(es) will be added.
 * @param {string|string[]} classes - The class or array of classes to add.
 */
export const addClass = (element, classes) => {
  if (typeof classes === "string") {
    classes = [classes];
  }
  element.classList.add(...classes);
};

/**
 * Remove one or more classes from an element.
 * @param {HTMLElement} element - The element from which the class(es) will be removed.
 * @param {string|string[]} classes - The class or array of classes to remove.
 */
export const removeClass = (element, classes) => {
  if (typeof classes === "string") {
    classes = [classes];
  }
  element.classList.remove(...classes);
};

/**
 * Toggle one or more classes on an element.
 * @param {HTMLElement} element - The element on which the class(es) will be toggled.
 * @param {string|string[]} classes - The class or array of classes to toggle.
 */
export const toggleClass = (element, classes, force = null) => {
  if (typeof classes === "string") {
    classes = [classes];
  }

  if (force) {
    classes.forEach((cls) => element.classList.toggle(cls, force));
  } else {
    classes.forEach((cls) => element.classList.toggle(cls));
  }
};

/**
 * Check if an element has a specific class.
 * @param {HTMLElement} element - The element to check.
 * @param {string} className - The class name to check for.
 * @returns {boolean} True if the element has the class, false otherwise.
 */
export const hasClass = (element, className) =>
  element.classList.contains(className);

// Element Content Manipulation

/**
 * Get the inner text of an element.
 * @param {HTMLElement} element - The element to retrieve inner text from.
 * @returns {string} The inner text of the element.
 */
export const getInnerText = (element) => element.innerText;

/**
 * Get the inner HTML of an element.
 * @param {HTMLElement} element - The element to retrieve inner HTML from.
 * @returns {string} The inner HTML of the element.
 */
export const getInnerHTML = (element) => element.innerHTML;

/**
 * Set the inner text of an element.
 * @param {HTMLElement} element - The element to set inner text on.
 * @param {string} text - The text to set as inner text.
 */
export const setInnerText = (element, text) => (element.innerText = text);

/**
 * Set the inner HTML of an element.
 * @param {HTMLElement} element - The element to set inner HTML on.
 * @param {string} html - The HTML content to set as inner HTML.
 */
export const setInnerHTML = (element, html) => (element.innerHTML = html);

// Element Creation and Deletion

/**
 * Create a new element with the specified tag name.
 * @param {string} tagName - The tag name of the element to create.
 * @returns {HTMLElement} The newly created element.
 */
export const createElement = (tagName) => document.createElement(tagName);

/**
 * Remove an element from the DOM.
 * @param {HTMLElement} element - The element to remove.
 */
export const deleteElement = (element) => element.remove();

// DOM Traversal

/**
 * Get the parent element of a given element.
 * @param {HTMLElement} element - The element to retrieve the parent of.
 * @returns {HTMLElement} The parent element.
 */
export const getParent = (element) => element.parentNode;

/**
 * Get the child elements of a given element.
 * @param {HTMLElement} element - The element to retrieve children from.
 * @returns {HTMLCollection} The child elements.
 */
export const getChildren = (element) => element.children;

/**
 * Get the next sibling of a given element.
 * @param {HTMLElement} element - The element to retrieve the next sibling of.
 * @returns {Node} The next sibling element.
 */
export const getNextSibling = (element) => element.nextSibling;

/**
 * Get the previous sibling of a given element.
 * @param {HTMLElement} element - The element to retrieve the previous sibling of.
 * @returns {Node} The previous sibling element.
 */
export const getPrevSibling = (element) => element.previousSibling;

// Local Storage Helpers

/**
 * Get an item from local storage by its key.
 * @param {string} key - The key of the item to retrieve.
 * @returns {string|null} The value of the item in local storage, or null if not found.
 */
export const getLocalStorage = (key) => localStorage.getItem(key);

/**
 * Set an item in local storage with a key and value.
 * @param {string} key - The key under which to store the item.
 * @param {string} value - The value to store in local storage.
 */
export const setLocalStorage = (key, value) => localStorage.setItem(key, value);

/**
 * Clear all items from local storage.
 */
export const clearLocalStorage = () => localStorage.clear();

// Attribute Manipulation

/**
 * Get the value of a specific attribute on an element.
 * @param {HTMLElement} element - The element to retrieve the attribute from.
 * @param {string} attribute - The name of the attribute to retrieve.
 * @returns {string|null} The value of the attribute, or null if not found.
 */
export const getAttribute = (element, attribute) =>
  element.getAttribute(attribute);

/**
 * Remove a specific attribute from an element.
 * @param {HTMLElement} element - The element to remove the attribute from.
 * @param {string} attribute - The name of the attribute to remove.
 */
export const removeAttribute = (element, attribute) =>
  element.removeAttribute(attribute);

// Child Management

/**
 * Append a child element to a parent element.
 * @param {HTMLElement} parent - The parent element.
 * @param {HTMLElement} child - The child element to append.
 */
export const appendChild = (parent, child) => parent.appendChild(child);

/**
 * Prepend a child element to a parent element.
 * @param {HTMLElement} parent - The parent element.
 * @param {HTMLElement} child - The child element to prepend.
 */
export const prependChild = (parent, child) =>
  parent.insertBefore(child, parent.firstChild);

// Array Utilities

/**
 * Calculate the total sum of the values in an array.
 * @param {number[]} array - The array of numbers to sum.
 * @returns {number} The total sum of the array values.
 */
export const getTotal = (array) =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

/**
 * Get the maximum value in an array.
 * @param {number[]} array - The array to find the maximum value in.
 * @returns {number} The maximum value in the array.
 */
export const getMax = (array) => Math.max(...array);

/**
 * Get the minimum value in an array.
 * @param {number[]} array - The array to find the minimum value in.
 * @returns {number} The minimum value in the array.
 */
export const getMin = (array) => Math.min(...array);

/**
 * Get an array of unique values from the input array.
 * @param {any[]} array - The array to retrieve unique values from.
 * @returns {any[]} An array of unique values.
 */
export const getUniqueValues = (array) => [...new Set(array)];

/**
 * Flatten an array of nested arrays into a single array.
 * @param {any[]} array - The array to flatten.
 * @returns {any[]} The flattened array.
 */
export const flattenArray = (array) => array.flat(Infinity);

// Event Management

/**
 * Add an event listener to an element or the document.
 * @param {HTMLElement|Document} [context=document] - The element or document to add the event listener to.
 * @param {string} event - The event type to listen for.
 * @param {Function} callback - The callback function to invoke when the event occurs.
 */
export const on = (context = document, event, callback) =>
  context.addEventListener(event, callback);

/**
 * Remove an event listener from an element or the document.
 * @param {HTMLElement|Document} [context=document] - The element or document to remove the event listener from.
 * @param {string} event - The event type to remove.
 * @param {Function} callback - The callback function that was used to add the event listener.
 */
export const off = (context = document, event, callback) =>
  context.removeEventListener(event, callback);
