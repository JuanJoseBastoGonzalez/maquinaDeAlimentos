const precios = {
  A: 270,
  B: 340,
  C: 390
};

const monedas = [100, 50, 10];

// Función principal
function comprarProducto() {
  let producto = prompt("Seleccione producto: A, B, C").toUpperCase();

  // Verificar si el producto ingresado es válido
  if (!precios.hasOwnProperty(producto)) {
    alert("Producto no valido.");
    return;
  }

  let montoIngresado = 0;
  let vuelto = [];


  while (montoIngresado < precios[producto]) {
    let monto = parseInt(prompt("Ingrese moneda (10, 50, 100)  "));
    
    if (!monedas.includes(monto)) {
      alert("Moneda  no permitida.");
      continue;
    }

    montoIngresado += monto;
  }


  let cambio = montoIngresado - precios[producto];
  for (let i = 0; i < monedas.length; i++) {
    while (cambio >= monedas[i]) {
      vuelto.push(monedas[i]);
      cambio -= monedas[i];
    }
  }

  alert(`Su restante es: ${vuelto.join(' ')}`);
}

comprarProducto();