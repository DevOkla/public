"use strict";

/*Variables */

let breedlistEl = document.getElementById("breedlist");
let contentEl = document.getElementById("content");

//Event listners

window.onload = init();
function init() {
  console.log("initiating..");
  console.log("Getting Data from https://dog.ceo/api/breeds/list/all..");
  getData();
}

//Functions

function getData() {
  let url = "https://dog.ceo/api/breeds/list/all";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let messageEl = data.message;

      for (let key in messageEl) {
        let listEl = document.createElement("li");
        let listText = document.createTextNode(key);
        listEl.appendChild(listText);

        breedlistEl.appendChild(listEl);
        // Prints result from `response.json()` in getRequest

        listEl.addEventListener("click", function () {
          loadImg(key);
        });
      }
    })
    .catch((error) => console.error(error));
}
function loadImg(key) {
  let url = "https://dog.ceo/api/breed/" + key + "/images/random";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayImg(data.message);
      let h3El = document.createElement("h3");
      h3El.id = "h3";
      h3El.innerHTML = "Dog-breed: " + key;
      contentEl.appendChild(h3El);
    })
    .catch((error) => console.error(error));
}

function displayImg(image) {
  contentEl.innerHTML = '<img src="' + image + '">';
}
