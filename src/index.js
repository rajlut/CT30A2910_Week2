// Add the user information to the table
username = document.getElementById("input-username");
email = document.getElementById("input-email");
address = document.getElementById("input-address");
isAdmin = document.getElementById("input-admin");

submitData = document.getElementById("submit-data");
submitData.addEventListener("click", function () {
  table = document.getElementById("user-info-table-body");
  let alreadyExists = false;
  let rowNum = 0;
  // search if the username already exists
  for (let i = 0; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].innerHTML == username.value) {
      alreadyExists = true;
      rowNum = i;
      break;
    }
  }
  // update the user information if the username already exists
  if (alreadyExists) {
    table.rows[rowNum].cells[1].innerHTML = email.value;
    table.rows[rowNum].cells[2].innerHTML = address.value;
    table.rows[rowNum].cells[3].innerHTML = isAdmin.checked ? "X" : "-";
  } else {
    table.innerHTML += `
      <tr>
        <td>${username.value}</td>
        <td>${email.value}</td>
        <td>${address.value}</td>
        <td>${isAdmin.checked ? "X" : "-"}</td>
      </tr>`
  }
})

// Empty the table when the "Empty table" button is pressed.
emptyTable = document.getElementById("empty-table");
emptyTable.addEventListener("click", function () {
  table = document.getElementById("user-info-table");
  table.innerHTML = "";
})
