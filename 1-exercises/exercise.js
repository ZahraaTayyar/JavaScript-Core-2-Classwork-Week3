/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// 1.
const pElements = document.querySelectorAll("p");
console.log(pElements);

// 2.
const firstDiv = document.querySelector(".site-header");
console.log(firstDiv);

// 3.
const jumbotronText = document.querySelector("#jumbotronText");
console.log(jumbotronText);

// 4.
const pElementInPrimaryContent =
  document.querySelectorAll(".primary-content p");
console.log(pElementInPrimaryContent);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

const changeBackgroundBtn = document.querySelector("#bgrChangeBtn");
changeBackgroundBtn.addEventListener("click", () => {
  const bodySelector = document.querySelector("body");
  bodySelector.style.backgroundColor;

  if (
    bodySelector.style.backgroundColor === "" ||
    bodySelector.style.backgroundColor === "white"
  ) {
    bodySelector.style.backgroundColor = "red";
  } else {
    bodySelector.style.backgroundColor = "white";
  }
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

const largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", () => {
  const linksSelector = document.querySelectorAll("a");

  for (let i = 0; i < linksSelector.length; i++) {
    linksSelector[i].style.fontSize = "30px";
  }
});

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

const addTextButton = document.querySelector("#addArticleBtn");

addTextButton.addEventListener("click", () => {
  const text = document.querySelector("#addArticleInput").value;

  const pElement = document.createElement("p");
  pElement.innerText = text;

  const parent = document.querySelector("#addArticle");
  parent.appendChild(pElement);
});

// thank you message after "donate now" is clicked:

const donateBtn = document.querySelector("#donateBtn");

donateBtn.addEventListener("click", () => {
  const thankYouMessage = document.createElement("div");

  thankYouMessage.innerText = "Thank you for donating!";
  thankYouMessage.style.textAlign = "right";

  const parent = document.querySelector(".site-header");
  parent.appendChild(thankYouMessage);
});
