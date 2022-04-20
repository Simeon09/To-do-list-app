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
    response.innerHTML="please add a task"
    
    return;
  }

  const parentDiv = document.createElement("div");
  parentDiv.classList.add("Items");
  // todoitems.appendChild("childdiv");
  const childDiv = document.createElement("div");
  childDiv.classList.add("to-doItems");
  // childDiv.innerText = inputvalue;
  const textRea = document.createElement("input");
  textRea.classList.add("text");
  textRea.type = "text";
  // textRea .innerHTML = inputvalue  ;
  textRea.value = inputvalue;
  textRea.setAttribute("readonly", "readonly");
  childDiv.appendChild(textRea);
  parentDiv.appendChild(childDiv);
  todoitems.appendChild(parentDiv);

  const btn = document.createElement("button");
  btn.classList.add("edit");
  btn.innerHTML = "EDIT";
  childDiv.appendChild(btn);
  parentDiv.appendChild(childDiv);
  todoitems.appendChild(parentDiv);

  const del = document.createElement("button");
  del.classList.add("delete");
  del.innerHTML = "DELETE";
  childDiv.appendChild(del);
  parentDiv.appendChild(childDiv);
  todoitems.appendChild(parentDiv);

  inputs.value = "";

  btn.addEventListener("click", (e) => {
    if (btn.innerText == "EDIT") {
      textRea.removeAttribute("readonly");
      textRea.focus();
      btn.innerText = "SAVE";
    } else {
      textRea.setAttribute("readonly", "readonly");
      btn.innerText ="EDIT";
    }
  });

  del.addEventListener ( 'click' , (e)=>{
    todoitems.removeChild(parentDiv)
  })

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
