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
let booksContainer = document.querySelector(".books-container");

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

  let status;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      status = radioButton.value;
      break;
    }
  }

  //Creating Obj,Giving the OBj my form values, Pushing Obj to array
  let newBook = new Book(titleValue, authorValue, pagesValue, status);
  addBookToLibrary(newBook);

  //Rendering the book on the screen
  let book = document.createElement("div");
  book.classList.add("book");
  let tempStatus = newBook.status;

  book.innerHTML = `
  <h2>${newBook.title}</h2>
  <p><strong>Author:</strong> ${newBook.author}</p>
  <p><strong>Pages:</strong> ${newBook.pages}</p>
  <p class="current-status"><strong>Status:</strong> ${newBook.status}</p>
  <button class="change-status">Change Status </button>
  <button class="delete"><i class='bx bx-trash-alt'></i> </button>
`;
  console.log(newBook.status);

  console.log(tempStatus);
  booksContainer.appendChild(book);

  // Delete Book instance
  let deleteBtn = book.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    book.remove();
  });

  //Changing Status
  let currentStatus = book.querySelector(".current-status");
  let changeStatusBtn = book.querySelector(".change-status");
  changeStatusBtn.addEventListener("click", () => {
    if (tempStatus === "Read") {
      tempStatus = "Not Read";
    } else {
      tempStatus = "Read";
    }
    currentStatus.innerHTML = `<strong>Status:</strong> ${tempStatus}`;
  });
});
