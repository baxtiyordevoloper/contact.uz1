let formsArr = [
  {
    id: 1,
    name: "Baxtiyor",
    age: "21",
    email: "baxtiyor@gmail.com",
    password: "11223344"
  },
];

let tbody = document.getElementById("tbody");

function getForms(forms){
 tbody.innerHTML = "";
 for(let i = 0; i < formsArr.length; i++){
  let tr = document.createElement("tr");
  tr.innerHTML = `
          <th scope="row">${formsArr[i].id}</th>
          <td>${formsArr[i].name}</td>
          <td>${formsArr[i].age}</td>
          <td>${formsArr[i].email}</td>
          <td>${formsArr[i].password}</td>
          <td> <button class = "btn btn-danger" onclick="deleteForm(${formsArr[i].id})">X</button></td>
          
  `
  tbody.appendChild(tr);
 } 
}
getForms(formsArr);

const form = document.getElementById("form");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

form.addEventListener("submit", addForm)

function addForm(e) {
  e.preventDefault();

  let newObj =
  {
    id: formsArr[formsArr.length -1].id + 1,
    name: nameInput.value,
    age: ageInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  }

  formsArr.push(newObj);
  getForms(formsArr);

  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function deleteForm(id){
  if(confirm("O'chirishni xohlaysizmi?")){
    let newArr = [];
  for(let i = 0; i < formsArr.length; i++){
    if(formsArr[i].id !== id){
      newArr.push(formsArr[i])
    }
  }
  formsArr = newArr;
  getForms(formsArr);
  }
}