interface employee {
  fName: string;
  lName: string;
  state: string;
  isMarried: string;
}

const employeeArr: employee[] = [
  {
    fName: "Edwin",
    lName: "Roldan",
    state: "PR",
    isMarried: "M",
  },
  {
    fName: "Mark",
    lName: "Otto",
    state: "TX",
    isMarried: "S",
  },
  {
    fName: "John",
    lName: "William",
    state: "FL",
    isMarried: "M",
  },
  {
    fName: "Hector",
    lName: "Lavoe",
    state: "CA",
    isMarried: "C",
  },
];

let employeeTable = document.getElementById("emp-table") as HTMLTableElement;

const loadEmployee = (): void => {
  for (let i = 0; i < employeeArr.length; i++) {
    let row = employeeTable.insertRow(i + 1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);

    cell0.innerHTML = `<i id="delete${i}" class="fa-regular fa-trash-can"></i>`;
    cell1.innerHTML = `${employeeArr[i].fName}`;
    cell2.innerHTML = `${employeeArr[i].lName}`;
    cell3.innerHTML = `${employeeArr[i].state}`;
    cell4.innerHTML = `${employeeArr[i].isMarried}`;
  }
};

let trashCans: HTMLCollectionOf<Element> = document.getElementsByTagName("i");

const deleteRow = (): void => {
  for (let i = 0; i < trashCans.length; i++) {
    trashCans[i].addEventListener("click", () => {
      document.getElementById("delete" + i).parentElement.parentElement.remove();
    });
  }
};

let maritalStatus = document.getElementsByName("martial-status-answer");

const selectMaritalStatus = (): string => {
  let maritalStatusValue: string;
  for (let i = 0; i < maritalStatus.length; i++) {
    let status = (maritalStatus[i] as HTMLInputElement | null)
    if (status.checked == true) {
      maritalStatusValue = status.value
    }
  }
  return maritalStatusValue;
}

const addEmployee = ():void => {
  let userForm = <HTMLFormElement>document.getElementById("user-form");
  let firstName = (
    document.getElementById("inputFName") as HTMLInputElement | null
  )?.value;
  let lastName = (
    document.getElementById("inputLName") as HTMLInputElement | null
  )?.value;
  let state = (document.getElementById("inputState") as HTMLInputElement | null)
    ?.value;

  let row = employeeTable.insertRow(trashCans.length + 1);

  row.insertCell(
    0
  ).innerHTML = `<i id="delete${trashCans.length}" class="fa-regular fa-trash-can"></i>`;
  row.insertCell(1).innerHTML = `${firstName}`;
  row.insertCell(2).innerHTML = `${lastName}`;
  row.insertCell(3).innerHTML = `${state}`;
  row.insertCell(4).innerHTML = `${selectMaritalStatus()}`

  userForm.reset();

  deleteRow();
};

const enableSubmit = ():void => {
  let requiredInputs = document.getElementsByClassName("required");
  let btn = (document.getElementById("submit") as HTMLInputElement);
  let isValid = true;

  for (let i = 0; i < requiredInputs.length; i++) {
    let changedInput = (requiredInputs[i] as HTMLInputElement | null);
    if (changedInput.value.trim() === "" || changedInput.value === null) {
      isValid = false;
      break;
    }
  }
  btn.disabled = !isValid;
}

const submitBtn = document.getElementById("submit");

loadEmployee();

deleteRow();

submitBtn.addEventListener("click", () => {
  addEmployee();
 
})

