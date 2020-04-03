var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

var btnRemove = document.querySelectorAll(".borrar");

//toogleList
function toggleList() {
	//forEach list item 
  listItems.forEach(item => {
    item.addEventListener("click", () => {

			//create  Button and class
      var alexs = item.querySelector("li button");
      var attBtn = document.createAttribute("class");
      attBtn.value = "borrar";
			alexs.setAttributeNode(attBtn);
			
			//if  toggle then switch the  class value to display:block , else switch to display:none
      if (item.classList.toggle("done")) {
        attBtn.value = "btna";
      } else {
        attBtn.value = "borrar";
			}
			
			//create foreach Button an event to remove parentElement
      btnRemove.forEach(i => {
        i.addEventListener("click", () => {
          i.parentElement.remove(i);
        });
      });
    });
  });
}
toggleList();


function inputLength() {
  return input.value.length;
}

function createListElement() {
	//create a list
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
	input.value = "";
	
	//create a button
  var btnList = document.createElement("button");
  li.appendChild(btnList);
  btnList.innerHTML = "Remove";

	//create a button class
  var attBtn = document.createAttribute("class");
  attBtn.value = "borrar";
  btnList.setAttributeNode(attBtn);

  li.addEventListener("click", () => {
		//if  toggle then switch the  class value to display:block , else switch to display:none
    if (li.classList.toggle("done")) {
      attBtn.value = "btna";
    } else {
      attBtn.value = "borrar";
    }
    btnList.addEventListener("click", () => {
      btnList.parentElement.remove(btnList);
    });
  });

}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
