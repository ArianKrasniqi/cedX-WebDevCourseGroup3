const BTN = document.getElementById("btn");

function buttonClicked() {
  const SNTC = document.getElementById("sentence");
  if (SNTC.innerHTML == "") {
    SNTC.textContent = "The sentence is there";
  } else {
    SNTC.textContent = "";
  }
}

BTN.addEventListener("click", buttonClicked);

// Arrays

let fruits = ["orange", "apple", "grasp"];
console.log(fruits[0] == "orange");
console.log(fruits[3]); // undefined

// Objects

let user = {
  name: "Arian",
  lastname: "Krasniqi",
  city: "Peje",
};
console.log(user.name);

let students = [
  {
    name: "Dren",
    lastname: "Berisha",
  },
  {
    name: "Elda",
    lastname: "Kaliqani",
  },
  {
    name: "Era",
    lastname: "Gashi",
  },
  {
    name: "Eros",
    lastname: "Gorani",
  },
  {
    name: "Arif",
    lastname: "Muka",
  },
];

console.log(students);
