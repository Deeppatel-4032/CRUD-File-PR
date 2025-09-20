let localDataBase = [];
let isEdit = false;

// Display Data
const DisplayData = () => {
  const tableBodyData = document.getElementById("tableBodyData");
  tableBodyData.innerHTML = "";
  localDataBase.forEach((data, index) => {
    tableBodyData.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>${data.contact}</td>
      <td>
        <button class="btn-edit" onclick="postEditeData(${index})">Edit</button>
        <button class="btn-delete" onclick="postDeleteData(${index})">Delete</button>
      </td>
    </tr>`;
  });
};

const addData = (event) => {
  event.preventDefault();

  // Get input elements
  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");
  const inputContact = document.getElementById("contact");

  // Get values
  const nameValue = inputName.value;
  const emailValue = inputEmail.value;
  const contactValue = inputContact.value;

  if (nameValue === "" || emailValue === "" || contactValue === "") {
    alert("Require All Fields");
    return;
  }

  if (isEdit === false) {
    // Add new record
    localDataBase.push({
      name: nameValue,
      email: emailValue,
      contact: contactValue,
    });
  } else {
    // Update record
    localDataBase[isEdit] = {
      name: nameValue,
      email: emailValue,
      contact: contactValue,
    };
    isEdit = false; // Reset edit mode
  }

  // Clear fields
  inputName.value = "";
  inputEmail.value = "";
  inputContact.value = "";

  DisplayData();
};

// Edit
const postEditeData = (index) => {
  document.getElementById("name").value = localDataBase[index].name;
  document.getElementById("email").value = localDataBase[index].email;
  document.getElementById("contact").value = localDataBase[index].contact;
  isEdit = index; // set current edit index
};

// Delete Data
const postDeleteData = (index) => {
  localDataBase.splice(index, 1);
  DisplayData();
};
