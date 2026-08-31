let array = ["Michael", 22, "Guatemala"];
let frutas = ["Manzana", "Banano", "Pera"]

alert(frutas);
document.writeln("<h1>Hola</h1>");
document.writeln("Bienvenido " + array[0]);
document.writeln("<br>");
//TAMAÑO
let tamaño = frutas.length;
document.writeln(tamaño);
document.writeln("<br>");
//AGREGAR
frutas.push("Uva");
frutas.unshift("Fresa");
alert(frutas);
document.writeln("<br>");
//ELIMINAR
frutas.splice(0,2);
document.writeln(frutas);

//FOR
for(let i = 0; i<5; i++){
    document.writeln(i);
}
document.writeln("<br>");
document.writeln("<br>");
//while
let j = 0
while(j<5){
    document.writeln(j);
    j++;
}
document.writeln("<br>");
document.writeln("<br>");
//do while
let x = 0;
do{
    document.writeln(x);
    x++;
}while(x<5)
