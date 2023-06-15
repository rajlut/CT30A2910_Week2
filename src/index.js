// Add the user information to the table
username = document.getElementById("input-username");
email = document.getElementById("input-email");
address = document.getElementById("input-address");
isAdmin = document.getElementById("input-admin");

submitData = document.getElementById("submit-data");
submitData.addEventListener("click", function () {
  table = document.getElementById("user-info-table-body");
  table.innerHTML += `
  <tr>
    <td>${username.value}</td>
    <td>${email.value}</td>
    <td>${address.value}</td>
    <td>${isAdmin.checked ? "X" : "-"}</td>
  </tr>`
})

// Empty the table when the "Empty table" button is pressed.
emptyTable = document.getElementById("empty-table");
emptyTable.addEventListener("click", function () {
  table = document.getElementById("user-info-table");
  table.innerHTML = "";
})