//Obtiene la base de datos existente
let dbemploy = localStorage.getItem('employees');

//Si no existe base de datos la crea y la convierte en JSON
if (!dbemploy) localStorage.setItem('employees', JSON.stringify([]));

//Crea la tabla en el html y la guarda en un array
let tbody = document.getElementById('data');
let arrayEmployees = JSON.parse(localStorage.getItem('employees'));

//Crea los elementos de la tabla 
let records = arrayEmployees.map((e,i)=>{
    return `<tr><td>${e.lastName}</td>  
                <td>${e.lastName2}</td> 
                <td>${e.name}</td>
                <td>${e.phone}</td> 
                <td>${e.position}</td> 
                <td class="btn-actions"><button onclick="selectButton(${i})" class="actions">Editar</button>
                <button onclick="deleteEmploy(${i})" class="actions">Eliminar</button></td>
            </tr> `
})

//Une los registros a la tabla
tbody.innerHTML = records.join('');
//Se crea para determinar si se presiono el botón de actualizar registro
let pressed = null;

//Si el valor de pressed es distinto de nulo actualiza los datos del empleado
//Si no guarda un nuevo empleado
function newEmploy(){    
    if(pressed!==null){
        let employeesDb = JSON.parse(localStorage.getItem('employees'));
        let lastName = document.getElementById('last-name').value;
        let lastName2 = document.getElementById('last-name2').value;
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let position = document.getElementById('position').value;
        employeesDb[pressed] = {lastName:lastName,lastName2:lastName2,name:name,phone:phone,position:position};
        localStorage.setItem('employees', JSON.stringify(employeesDb));
        window.location.reload();        

    } else {
        let lastName = document.getElementById('last-name').value;
        let lastName2 = document.getElementById('last-name2').value;
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let position = document.getElementById('position').value;
        let employeesDb = JSON.parse(localStorage.getItem('employees'));
        employeesDb.push({lastName:lastName,lastName2:lastName2,name:name,phone:phone,position:position});
        localStorage.setItem('employees', JSON.stringify(employeesDb));
        window.location.reload();
    }
}

//obtiene la base de datos existente
let employessData = JSON.parse(localStorage.getItem('employees')); 

//Envía los valors del empleado a editar a los inputs y le asigna valor a la variable pressed
function selectButton(index){    
    document.getElementById('last-name').value=employessData[index].lastName;
    document.getElementById('last-name2').value=employessData[index].lastName2;
    document.getElementById('name').value=employessData[index].name;
    document.getElementById('phone').value=employessData[index].phone;
    document.getElementById('position').value=employessData[index].position;
    pressed = index;   
}

//elimina un empleado cortando el array y guardando el array actualizado
function deleteEmploy(index) {            
    employessData.splice(index,1);    
    localStorage.setItem('employees', JSON.stringify(employessData));
    window.location.reload();    
}