var employeeArr = [
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
var employeeTable = document.getElementById("emp-table");
var loadEmployee = function () {
    for (var i = 0; i < employeeArr.length; i++) {
        var row = employeeTable.insertRow(i + 1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        cell0.innerHTML = "<i id=\"delete".concat(i, "\" class=\"fa-regular fa-trash-can\"></i>");
        cell1.innerHTML = "".concat(employeeArr[i].fName);
        cell2.innerHTML = "".concat(employeeArr[i].lName);
        cell3.innerHTML = "".concat(employeeArr[i].state);
        cell4.innerHTML = "".concat(employeeArr[i].isMarried);
    }
};
var trashCans = document.getElementsByTagName("i");
var deleteRow = function () {
    var _loop_1 = function (i) {
        trashCans[i].addEventListener("click", function () {
            document
                .getElementById("delete" + i)
                .parentElement.parentElement.remove();
        });
    };
    for (var i = 0; i < trashCans.length; i++) {
        _loop_1(i);
    }
};
var maritalStatus = document.getElementsByName("martial-status-answer");
var selectMaritalStatus = function () {
    var maritalStatusValue;
    for (var i = 0; i < maritalStatus.length; i++) {
        var status_1 = maritalStatus[i];
        if (status_1.checked == true) {
            maritalStatusValue = status_1.value;
        }
    }
    return maritalStatusValue;
};
var addEmployee = function () {
    var _a, _b, _c;
    var userForm = document.getElementById("user-form");
    var firstName = (_a = document.getElementById("inputFName")) === null || _a === void 0 ? void 0 : _a.value;
    var lastName = (_b = document.getElementById("inputLName")) === null || _b === void 0 ? void 0 : _b.value;
    var state = (_c = document.getElementById("inputState")) === null || _c === void 0 ? void 0 : _c.value;
    var row = employeeTable.insertRow(trashCans.length + 1);
    row.insertCell(0).innerHTML = "<i id=\"delete".concat(trashCans.length, "\" class=\"fa-regular fa-trash-can\"></i>");
    row.insertCell(1).innerHTML = "".concat(firstName);
    row.insertCell(2).innerHTML = "".concat(lastName);
    row.insertCell(3).innerHTML = "".concat(state);
    row.insertCell(4).innerHTML = "".concat(selectMaritalStatus());
    userForm.reset();
    deleteRow();
};
var enableSubmit = function () {
    var requiredInputs = document.getElementsByClassName("required");
    var btn = document.getElementById("submit");
    var isValid = true;
    for (var i = 0; i < requiredInputs.length; i++) {
        var changedInput = requiredInputs[i];
        if (changedInput.value.trim() === "" || changedInput.value === null) {
            isValid = false;
            break;
        }
    }
    btn.disabled = !isValid;
};
var submitBtn = document.getElementById("submit");
loadEmployee();
deleteRow();
submitBtn.addEventListener("click", function () {
    addEmployee();
});
