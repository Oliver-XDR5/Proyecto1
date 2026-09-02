function iniciar(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if(usuario == "admin" && contraseña == "1234"){
        window.location="reparacion.html";
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }
}