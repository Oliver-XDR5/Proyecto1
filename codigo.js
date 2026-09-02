function iniciar(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if(usuario == "admin" && contraseña == "1234"){
        window.location="reparacion.html";
    }
    else if(usuario == "" && contraseña == ""){
        alert("Los espacios están vacíos. Por favor, ingrese usuario y contraseña");
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }
}