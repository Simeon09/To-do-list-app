const todoitems = document.querySelector("#task");
const inputs = document.querySelector(".input");
const form = document.querySelector(".form");
const edit = document.querySelector(".edit");
const trash = document.querySelector(".delete");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitform");
  const inputvalue = inputs.value;
  if (!inputvalue) {
    alert("please");
    return;
  }

  const parentDiv = document.createElement('div');
  parentDiv.classList.add("Items");
  // todoitems.appendChild("childdiv");
  const childDiv = document.createElement ('div');
  childDiv.classList.add('to-doItems');
  childDiv.innerText = inputvalue;
  parentDiv.appendChild(childDiv);
  todoitems.appendChild(parentDiv);
  // else {
  //     additems();
  // }
});
// function additems() {
//   var parentdiv = document.createElement("div");
//   parentdiv.classList.add("to-doItems");
//   todoitems.appendChild("parentdiv");
//   parentdiv.innerText = todoitems;
//   var editbutton = document.createElement("button");
//   var trashbutton = document.createElement("button");

//   // parentdiv.className='to-doItems';
//   // parentdiv.innerHTML = 'div' + inputs.value + 'div';
// }
