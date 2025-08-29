## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

| Method                                | What it Finds                                     | Return Type            | Notes                                                                |
| ------------------------------------- | ------------------------------------------------- | ---------------------- | -------------------------------------------------------------------- |
| **`getElementById("id")`**            | One element by its **id**                         | Single Element or null | Fastest way to grab by ID. IDs must be unique.                       |
| **`getElementsByClassName("class")`** | All elements with a given **class name**          | HTMLCollection         | Looks like an array, but not exactly. Needs loop to access elements. |
| **`querySelector("selector")`**       | The **first element** that matches a CSS selector | Single Element or null | Flexible: can use any CSS selector (`#id`, `.class`, `div > span`).  |
| **`querySelectorAll("selector")`**    | **All elements** that match a CSS selector        | NodeList               | Similar to array. Supports `for...of` and `.forEach()`.              |

## 2. How do you create and insert a new element into the DOM?

1. Use document.createElement("tagName") to create the element.
2. Set its content (textContent, innerHTML) or attributes (className, id).
3. Insert it into the DOM using methods like .appendChild() or .insertBefore().

## 3. What is Event Bubbling and how does it work?

- Event Bubbling is when an event starts at the deepest element and then bubbles up through its parents.

## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is a technique where you attach one event listener to a parent element instead of adding listeners to many child elements.
- It is useful because it improves performance (fewer event listeners).
- And also Handle dynamically added elements without needing new listeners.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

| Method                | Purpose                                                                | Example Use Case                                                              |
| --------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **preventDefault()**  | Stops the **browser’s default behavior** for an event.                 | Prevent a form from submitting or a link from navigating.                     |
| **stopPropagation()** | Stops the event from **bubbling up** (or capturing down) the DOM tree. | Prevent a child button’s click from also triggering its parent’s click event. |
