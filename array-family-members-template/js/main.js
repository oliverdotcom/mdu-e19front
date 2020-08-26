/*
 Array of family members
*/
let familyMembers = [{
  name: "Peter Madsen",
  age: 52,
  hairColor: "blonde",
  relation: "dad",
  img: "img/dad.jpg"
}, {
  name: "Ane Madsen",
  age: 51,
  hairColor: "brown",
  relation: "mom",
  img: "img/ane.jpg"
}, {
  name: "Rasmus Madsen",
  age: 29,
  hairColor: "blonde",
  relation: "brother",
  img: "img/rasmus.jpg"
}, {
  name: "Mie Madsen",
  age: 25,
  hairColor: "brown",
  relation: "sister",
  img: "img/mie.jpg"
}, {
  name: "Mads Madsen",
  age: 18,
  hairColor: "dark",
  relation: "brother",
  img: "img/mads.jpg"
}, {
  name: "Jens Madsen",
  age: 14,
  hairColor: "blonde",
  relation: "brother",
  img: "img/jenspeter.jpg"
}];

console.log(familyMembers);

/*
Appends data to the DOM
*/
function appendPersons(persons) {
  let htmlTemplate = "";
  for (const person of persons) {
  htmlTemplate += /*html*/`
    <article>
      <img src="${person.img}">
      <h4>${person.name}</h4>
      <p>${person.age} years old</p>
      <p>Hair color: ${person.hairColor}</p>
      <p>Relation: ${person.relation}</p>
    </article>
  `;
  }
  document.querySelector("#persons").innerHTML = htmlTemplate;
}

appendPersons(familyMembers);

/*
Search functionality: find objects by given searchValue
*/
function search(searchValue) {
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);

  // TODO: implement search functionality
}

/*
Adds a new object to the array familyMembers 
*/
function add() {
  console.log("Add button clicked");

  let inputName = document.getElementById('inputName');

  // TODO: implement add functionality
}