let nombreSignoVital = document.getElementById("nombresignovital");
let valorSignoVital = document.getElementById("valorsignovital");
let fechaMedidaSignoVital = document.getElementById("fechamedidasignovital");


let botonRegistroSignoVital = document.getElementById("botonregistroSignoVital");
 
 botonregistroSignoVital.addEventListener("click", function(evento){
    evento.preventDefault();
    // 5. Se crea un JSON que capture todos los datos del formulario
    
    let datosFormularioSignoVital = {
      nombre: nombreSignoVital.value,
      valor: valorSignoVital.value,
      fechaMedida: fechaMedidaSignoVital.value
    };
    
    // 6. Se envían los datos al back
    
    console.log(datosFormularioSignoVital)
    
    Swal.fire({
      title: "Registro Exitoso",
      text: "Ya eres parte de nuestra gran familia!",
      icon: "success"
    });
})