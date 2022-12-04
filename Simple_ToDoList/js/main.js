/*
DOM Manipulation / ToDoList 
Maamoun Okla, maamoun.okla@icloud.com
*/

"use strict";

/********** VARIABLES ************/

let newToDoEl = document.getElementById("newtodo");
let newToDoButtonEl = document.getElementById("newtodobutton");
let errorMessageEl = document.getElementById("message");
let toDoListEl = document.getElementById("todolist");
let clearButtonEl = document.getElementById("clearbutton");

/************ EVENT LISTENERS *************/

newToDoEl.addEventListener("keyup", checkItemText, false);
clearButtonEl.addEventListener("click", clearData, false);
newToDoButtonEl.addEventListener("click", addItem, false);

window.onload = init;
//Start function init
function init() {
  console.log("initierar...");

  loadData();
  checkItemText();
}
//functionen checkItemText för att kontrollera längden på texten.

function checkItemText() {
  console.log("Kontrollerar input...");
  let input = newToDoEl.value;
  //knontrollera om texten är kortare än fem tecken.
  if (input.length > 4) {
    newToDoButtonEl.disabled = false;

    //Rensa innehållet i textfältet.
    errorMessageEl.innerHTML = "";
  } else {
    //skriv ut att texten är för kort under fältet.
    errorMessageEl.innerHTML = "Enter at least 5 characters";

    //disable knappen lägg till
    newToDoButtonEl.disabled = true;
  }
}

/*functionen addItem lägger till article med textnod i todolist.
 Samt att rensa textfältet och innehåller en anonymfunktoin som tar 
 bort nya items.*/

function addItem() {
  //skapa nytt article-element
  let newItem = document.createElement("article");

  //skapa nytt text-element
  let newText = document.createTextNode(newToDoEl.value);

  //lägg till text i newItem
  newItem.appendChild(newText);

  //ange klass för att använda den i storeData functionen.
  newItem.className = "newToDoItem";

  //positionen för newItem under todolist.
  toDoListEl.appendChild(newItem);

  //lägg till klickhanterare för att kunna radera enskilda items
  newItem.addEventListener("click", function (e) {
    e.target.remove();
  });

  //rensa textfältet efter att man har tryckt på knappen "lägg till"
  newToDoEl.value = "";

  //disable lägg till knappen inför kontroll av nästkommande todo-item.
  newToDoButtonEl.disabled = true;

  //anropa functionen storeData för att lagra newItem.
  storeData();
}

//lagra items
function storeData() {
  //Läs in items-lista
  var data = document.getElementsByClassName("newToDoItem");

  //skapa en tillfällig array för att lagra data.
  var tempArr = [];

  //Loopa genom listan och lagrar data i en temporär array
  for (let i = 0; i < data.length; i++) {
    //lägg till värden från data i den nya array
    tempArr.push(data[i].innerHTML);
  }

  /*konvertera den tillfälliga array med värden från data till en 
  JSON-sträng och lagra den i localStorage.*/
  var jsonStr = JSON.stringify(tempArr);

  localStorage.setItem("data", jsonStr);
}

//läs in data

function loadData() {
  console.log("läser in items..");

  //Konverterar JSON-strängen till en valing array.
  var data = JSON.parse(localStorage.getItem("data"));

  //loopa genom arrayn data.
  for (let i = 0; i < data.length; i++) {
    //skapa nytt article-element
    let newItem = document.createElement("article");

    //skapa nytt text-element
    let newText = document.createTextNode(data[i]);

    //lägg till text i newItem
    newItem.appendChild(newText);
    newItem.className = "newToDoItem";

    //positionen för newItem under todolist.
    toDoListEl.appendChild(newItem);

    /*lägg till klickhanterare för att kunna radera enskilda items
    den innehåller en anonymfunktoin som tar bort lagrade items.*/
    newItem.addEventListener("click", function (e) {
      e.target.remove();

      storeData();
    });
  }
}

//Rensa
function clearData() {
  //Rensa localStorage och todolista items.
  localStorage.clear();
  toDoListEl.innerHTML = "";
}
