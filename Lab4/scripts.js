// Array of objects that will be used to display our menu content through DOM manipulation
const employees = [
  {
    fName: "Mark",
    lNmae: "Otto",
    state: "TX",
    isMarried: "S",
  },
  {
    fName: "John",
    lNmae: "William",
    state: "FL",
    isMarried: "M",
  },
  {
    fName: "Hector",
    lNmae: "Lavoe",
    state: "CA",
    isMarried: "C",
  },
];

let empTable = document.getElementById("emp-table");

//This function adds the 3 employees from the emplyees table
const loadEmployees = () => {
  for (let i = 0; i < employees.length; i++) {
    let row = empTable.insertRow(i + 1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = `<i id="delete${i}" class="fa-regular fa-trash-can"></i>`;
    cell2.innerHTML = `${employees[i].fName}`;
    cell3.innerHTML = `${employees[i].lNmae}`;
    cell4.innerHTML = `${employees[i].state}`;
    cell5.innerHTML = `${employees[i].isMarried}`;
  }
};

//This variable will detect how many trash-can icons are present
let trashCans = document.getElementsByClassName("fa-trash-can");

//This function adds the delete functionality to trash-can icons
const deleteFunction = () => {
  for (let i = 0; i < trashCans.length; i++) {
    document.getElementById("delete" + i).addEventListener("click", () => {
      document.getElementById("emp-table").deleteRow(i + 1);
    });
  }
};

//We select the radio inputs from marital status and select the one is checked when submitting the form
let maritalStatus = document.getElementsByName("martial-status-answer");
const selectChecked = () => {
  let maritalStatusValue;
  for (i = 0; i < maritalStatus.length; i++) {
    if (maritalStatus[i].checked == true) {
      maritalStatusValue = maritalStatus[i].value;
    }
  }
  return maritalStatusValue;
};

const submitBtn = document.getElementById("submit");

//This function adds employees on form submission
const addEmployee = () => {
  let firstName = document.getElementById("inputFName").value;
  let lastName = document.getElementById("inputLName").value;
  let state = document.getElementById("inputState").value;

  let lastRow = trashCans.length + 1;
  let row = empTable.insertRow(lastRow);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.innerHTML = `<i id="delete${trashCans.length}" class="fa-regular fa-trash-can"></i>`;
  cell2.innerHTML = `${firstName}`;
  cell3.innerHTML = `${lastName}`;
  cell4.innerHTML = `${state}`;
  cell5.innerHTML = `${selectChecked()}`;
  document.form.reset();
};

loadEmployees();
deleteFunction();

//This function will enable the submit button after the minimum required input fields are filled.
//It will prevent the event listener to submit blank inputs

const enableSubmit = () => {
  let inputs = document.getElementsByClassName("required"); // Enter your class name for a required field, this should also be reflected within your form fields.
  let btn = document.getElementById("submit");
  let isValid = true;
  for (var i = 0; i < inputs.length; i++) {
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null) {
      isValid = false;
      break;
    }
  }
  btn.disabled = !isValid;
};

//submit button event listener
submitBtn.addEventListener("click", () => {
  addEmployee();
  deleteFunction();
});
