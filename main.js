const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(obj) {
  myLibrary.push(obj);
}

let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let radioButtons = document.querySelectorAll('input[name="isRead"]');

//open form
let openFormBtn = document.querySelector("#open-form");
let formBtn = document.querySelector(".book-form");
openFormBtn.addEventListener("click", () => {
  formBtn.classList.toggle("hidden");
});

//close form and clear inputs everytime
let closeFormBtn = document.querySelector("#close-button");
closeFormBtn.addEventListener("click", () => {
  formBtn.classList.toggle("hidden");
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
});

let addBookbtn = document.querySelector("#add-book");
addBookbtn.addEventListener("click", (e) => {
  e.preventDefault();

  //saving the actual  user's form values in new variables
  let titleValue = titleInput.value;
  let authorValue = authorInput.value;
  let pagesValue = pagesInput.value;

  let selectedValue;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      break;
    }
  }

  //Creating Obj,Giving the OBj my form value, Pushing Obj to array
  let newBook = new Book(titleValue, authorValue, pagesValue, selectedValue);
  addBookToLibrary(newBook);
  console.log(newBook);
  console.log(myLibrary);
});

// console.log(titleValue);
// console.log(authorValue);
// console.log(pagesValue);
// console.log(selectedValue);
