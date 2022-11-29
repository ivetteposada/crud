//Obtiene la base de datos existente
let employessData = localStorage.getItem('employees');

//Si no existe base de datos la crea y la convierte en JSON
if (!employessData) { 
  localStorage.setItem('employees', JSON.stringify([]));
}

//Crea la tabla en el html y la guarda en un array
let tbody = document.getElementById('data');
let arrayEmployees = JSON.parse(localStorage.getItem('employees'));

//Crea los elementos de la tabla 
let records = arrayEmployees.map((employee,index)=>{
  return `<tr>
    <td>${employee.lastName}</td>  
    <td>${employee.lastName2}</td> 
    <td>${employee.name}</td>
    <td>${employee.phone}</td> 
    <td>${employee.position}</td> 
    <td class="btn-actions">
      <button onclick="selectButton(${index})" class="actions">Editar</button>
      <button onclick="deleteEmploy(${index})" class="actions">Eliminar</button>
    </td>
  </tr> `
})

//Une los registros a la tabla
tbody.innerHTML = records.join('');
//Se crea para determinar si se presiono el botón de actualizar registro
let pressed = null;

//Si el valor de pressed es distinto de nulo actualiza los datos del empleado
//Si no guarda un nuevo empleado
const newEmploy = () => {    
  let employeesDb = JSON.parse(localStorage.getItem('employees'));
  const employee = {
    lastName : document.getElementById('last-name').value,
    lastName2 : document.getElementById('last-name2').value,
    name : document.getElementById('name').value,
    phone : document.getElementById('phone').value,
    position : document.getElementById('position').value,
  }
  if (pressed!==null) {
    employeesDb[pressed] = employee;
  } else {
    employeesDb.push(employee);
  }
  localStorage.setItem('employees', JSON.stringify(employeesDb));
  window.location.reload();
}

//obtiene la base de datos existente
let employeesData = JSON.parse(localStorage.getItem('employees')); 

//Envía los valors del empleado a editar a los inputs y le asigna valor a la variable pressed
const selectButton = (index) => {
  const selectedEmployee = employeesData[index];     
  document.getElementById('last-name').value=selectedEmployee.lastName;
  document.getElementById('last-name2').value=selectedEmployee.lastName2;
  document.getElementById('name').value=selectedEmployee.name;
  document.getElementById('phone').value=selectedEmployee.phone;
  document.getElementById('position').value=selectedEmployee.position;
  pressed = index;   
}

//Elimina un empleado cortando el array y guardando el array actualizado
const deleteEmploy = (index) => {            
  employeesData.splice(index,1);    
  localStorage.setItem('employees', JSON.stringify(employeesData));
  window.location.reload();    
}