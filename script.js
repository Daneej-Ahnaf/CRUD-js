const formEl = document.getElementById("student-form");
const firstNameEl = document.getElementById("FirstName");
const lastNameEl = document.getElementById("LastName");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("MobileNumber");
const tableBody = document.getElementById("student-list");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${firstNameEl.value}</td>
        <td>${lastNameEl.value}</td>
        <td>${emailEl.value}</td>
        <td>${phoneEl.value}</td>
        <td>
            <button class="btn btn-outline-warning btn-sm" onclick="editData(event)">
                <i class="bi bi-pencil-square"></i>Edit
            </button>
            <button class="btn btn-outline-danger btn-sm" onclick="deleteData(event)">
                <i class="bi bi-trash"></i>Delete
            </button>
        </td>`;
    tableBody.appendChild(tr);
    formEl.reset();
});

function deleteData(event) {
    event.target.closest("tr").remove();
}

function editData(event) {
    const selectedRow = event.target.closest("tr");
    firstNameEl.value = selectedRow.children[0].textContent;
    lastNameEl.value = selectedRow.children[1].textContent;
    emailEl.value = selectedRow.children[2].textContent;
    phoneEl.value = selectedRow.children[3].textContent;
    selectedRow.remove();
}