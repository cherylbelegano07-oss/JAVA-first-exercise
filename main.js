const txtNum = document.getElementById("txtNum");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const tblNumbers = document.getElementById("tblNumbers");

let numbers = [];

btn1.addEventListener("click", function () {
  let num = Number(txtNum.value);

  if (txtNum.value === "" || isNaN(num) || num <= 0) {
    alert("Please enter a positive number.");
    return;
  }

  numbers.push(num);

  displayNumbers();

  txtNum.value = "";
  txtNum.focus();

  btn4.style.display = "inline-block";
});

btn2.addEventListener("click", function () {
  txtNum.value = "";
  txtNum.focus();
});

btn3.addEventListener("click", function () {
  numbers = [];

  displayNumbers();

  btn4.style.display = "none";
});

btn4.addEventListener("click", function () {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  alert("The total is: " + total);
});

function displayNumbers() {
  // Clear table
  tblNumbers.innerHTML = "";

  let header = tblNumbers.insertRow();

  let numberHeader = header.insertCell();
  let resultHeader = header.insertCell();
  let actionHeader = header.insertCell();

  numberHeader.textContent = "Number";
  resultHeader.textContent = "Even / Odd";
  actionHeader.textContent = "Action";

  for (let i = 0; i < numbers.length; i++) {
    let row = tblNumbers.insertRow();

    let numberCell = row.insertCell();
    let resultCell = row.insertCell();
    let actionCell = row.insertCell();

    numberCell.textContent = numbers[i];

    if (numbers[i] % 2 === 0) {
      resultCell.textContent = "EVEN";
    } else {
      resultCell.textContent = "ODD";
    }

    let editButton = document.createElement("button");

    editButton.textContent = "Edit";

    editButton.style.backgroundColor = "#7b5fc7";
    editButton.style.color = "white";
    editButton.style.border = "none";
    editButton.style.padding = "6px 12px";
    editButton.style.borderRadius = "6px";
    editButton.style.cursor = "pointer";

    editButton.addEventListener("click", function () {
      let newNumber = prompt("Enter the new positive number:", numbers[i]);

      if (newNumber === null) {
        return;
      }

      let editedNumber = Number(newNumber);

      if (newNumber.trim() === "" || isNaN(editedNumber) || editedNumber <= 0) {
        alert("Please enter a valid positive number.");
        return;
      }

      numbers[i] = editedNumber;

      displayNumbers();
    });

    actionCell.appendChild(editButton);
  }
}
