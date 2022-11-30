let costData = localStorage.getItem('cost');

if (!costData) {
    localStorage.setItem('cost', JSON.stringify([]));
}

let tbody = document.getElementById('data-cost');

let arrayCost = JSON.parse(localStorage.getItem('cost'));

let records = arrayCost.map((product,index) => {
    return `<tr>
    <td>${product.productName}</td>  
    <td>${product.cost}</td> 
    <td>${product.sale}</td>
    <td>${product.sale-product.cost}</td>     
    <td class="btn-actions">
      <button onclick="selectButton(${index})" class="actions">Editar</button>
      <button onclick="deleteProduct(${index})" class="actions">Eliminar</button>
    </td>
  </tr> `    
});

tbody.innerHTML = records.join('');

let pressed = null;

const newProduct = () => {
    let costData = JSON.parse(localStorage.getItem('cost'));
    const product = {
        productName : document.getElementById('product-name').value,
        cost : document.getElementById('cost').value,
        sale : document.getElementById('sale').value,
        margin : document.getElementById('margin').value
    }

    if(pressed!==null){
        costData[pressed] = product;
    } else {
        costData.push(product);
    }

    localStorage.setItem('cost',JSON.stringify(costData));
    window.location.reload();
}

let productData = JSON.parse(localStorage.getItem('cost')); 

const selectButton = (index) => {
  const selectedProduct = productData[index];     
  document.getElementById('product-name').value=selectedProduct.productName;
  document.getElementById('cost').value=selectedProduct.cost;
  document.getElementById('sale').value=selectedProduct.sale;
  margin : document.getElementById('margin').value;
  
  pressed = index;   
}

//Elimina un empleado cortando el array y guardando el array actualizado
const deleteProduct = (index) => {            
  productData.splice(index,1);    
  localStorage.setItem('cost', JSON.stringify(productData));
  window.location.reload();    
}