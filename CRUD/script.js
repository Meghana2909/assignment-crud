const studentForm = document.getElementById("student-form");
const tableBody = document.getElementById("table-body");
let rowCount = 1; // Counter for unique row IDs

studentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const parentName = document.getElementById("parent-name").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;

    // Create a unique row ID
    const rowID = `row-${rowCount}`;
    rowCount++;

    // Create a new row in the table with student details and a unique ID
    const newRow = tableBody.insertRow();
    newRow.id = rowID;
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${dob}</td>
        <td>${parentName}</td>
        <td>${address}</td>
        <td>${city}</td>
        <td>${phone}</td>
        <td>
            <button class="edit-btn" onclick="editRow('${rowID}')">Edit</button>
            <button class="delete-btn" onclick="deleteRow('${rowID}')">Delete</button>
        </td>
    `;

    // Clear the form inputs
    studentForm.reset();
});

// Function to delete a specific row by ID
function deleteRow(rowID) {
    const row = document.getElementById(rowID);
    tableBody.removeChild(row);
}

// Function to edit a specific row by ID
function editRow(rowID) {
    const row = document.getElementById(rowID);
    const cells = row.getElementsByTagName('td');

    // Extract data from the row for editing
    const firstName = cells[0].textContent;
    const lastName = cells[1].textContent;
    const dob = cells[2].textContent;
    const parentName = cells[3].textContent;
    const address = cells[4].textContent;
    const city = cells[5].textContent;
    const phone = cells[6].textContent;

    // Fill the form fields with the data for editing
    document.getElementById("first-name").value = firstName;
    document.getElementById("last-name").value = lastName;
    document.getElementById("dob").value = dob;
    document.getElementById("parent-name").value = parentName;
    document.getElementById("address").value = address;
    document.getElementById("city").value = city;
    document.getElementById("phone").value = phone;

    // Remove the row from the table
    tableBody.removeChild(row);
}
