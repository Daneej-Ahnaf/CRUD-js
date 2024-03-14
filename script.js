
const formEl= document.getElementById("student-form");

const firstNameEl= document.getElementById("FirstName");
const lastNameEl= document.getElementById("LastName");
const emailEl= document.getElementById("email");
const phoneEl= document.getElementById("MobileNumber");

const tableBody = document.getElementById("student-list");

// add data

formEl.addEventListener("submit",(e)=>{

e.preventDefault();

  var tr =document.createElement("tr");

tr.innerHTML= `<td>${firstNameEl.value}</td>
               <td>${lastNameEl.value}</td>
             <td>${emailEl.value}</td> 
              <td>${phoneEl.value}</td>
              <td>
              <button class="btn btn-outline-warning btn-sm" onclick="editData(event)"> <i class="bi bi-pencil-square"></i>Edit</button>
              <button class="btn btn-outline-danger btn-sm" onclick="deleteData(event)"> <i class="bi bi-trash"></i>Delete</button>
           </td>`;

  tableBody.appendChild(tr);
//   formEl.reset();
});



// delete data

function deleteData(event)
{
  
  //  const deleteConfirm = confirm("Are You Sure You Want To Delete");

   event.target.parentElement.parentElement.remove();
    // if(deleteConfirm){
      

    // }

}


// edit data

 function editData(event)
 {

  selectedrow = event.target.parentElement.parentElement;
   
   firstNameEl.value = selectedrow.children[0].textContent;
   lastNameEl.value = selectedrow.children[1].textContent;
   emailEl.value = selectedrow.children[2].textContent;
   phoneEl.value = selectedrow.children[3].textContent;


 }