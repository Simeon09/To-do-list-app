const todoitems = document.querySelector("#task")[0];
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

  var parentdiv = document.createElement("div");
  parentdiv.classList.add("to-doItems");
  todoitems.appendChild("childdiv");
  var childdiv = document.createElement ('div');
  childdiv.classList.add('.Items');
  childdiv.appendChild('parentdiv');
  parentdiv.innerText = todoitems;
  // else {
  //     additems();
  // }
});
function additems() {
  var parentdiv = document.createElement("div");
  parentdiv.classList.add("to-doItems");
  todoitems.appendChild("parentdiv");
  parentdiv.innerText = todoitems;
  var editbutton = document.createElement("button");
  var trashbutton = document.createElement("button");

  // parentdiv.className='to-doItems';
  // parentdiv.innerHTML = 'div' + inputs.value + 'div';
}
