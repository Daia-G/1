

function ingreso() {
   const rolPermitido = "tutor"
   let nombreRol = prompt("Bienvenido/a. Aquí sólo se permiten TUTORES. Por favor, indique su rol en Coder House. ")
   let rolMinuscula = nombreRol.toLowerCase();
   if (rolMinuscula == "") {
      console.warn("No se ha ingresado ningún dato.")
      return
   }
   while (rolMinuscula != rolPermitido) {
      console.error("ACCESO DENEGADO. INTRUSO! INTRUSO!")
      nombreRol = prompt("Bienvenido/a. Aquí sólo se permiten TUTORES. Por favor, indique su rol en Coder House. ")
   }
   if (rolMinuscula == "tutor") {
      alert("Este es el mensaje secreto del día: LA VIDA NO ES TAN SERIA COMO LA VIVIMOS.")   
   }
}

ingreso()