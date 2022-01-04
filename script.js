var unidad = parseInt(prompt("Elija la unidad a calcular: \n 1) Trabajo 2) Fuerza 3) Distancia"));
if (unidad == 1){
    var fuerza = parseInt(prompt("Escriba la cantidad de fuerza"));
    var distancia = parseInt(prompt("Escriba la cantidad de distancia"));
    var trabajo = (fuerza * distancia);
    document.write("Fuerza = " + fuerza + " N <br>");
    document.write("Distancia = " + distancia + "m <br>");
    document.write("El trabajo es: " + trabajo + " J <br>");
    document.write("T = F*D <br>");
    document.write("T = " + fuerza + " N * " + distancia + "m <br>");
    document.write("T = "+ trabajo + " J");
}
else if (unidad == 2){
    var trabajo = parseInt(prompt("Escriba la cantidad de trabajo"));
    var distancia = parseInt(prompt("Escriba la cantidad de distancia"));
    var fuerza = (trabajo / distancia);
    document.write("Trabajo = " + trabajo + " J <br>");
    document.write("Distancia = " + distancia + "m<br>");
    document.write("La fuerza es: " + fuerza + " N <br>");
    document.write("F = T/D <br>");
    document.write("F = " + trabajo + " J / " + distancia + "m <br>");
    document.write("F = "+ fuerza + " N");
}
else if (unidad == 3){
    var trabajo = parseInt(prompt("Escriba la cantidad de trabajo"));
    var fuerza = parseInt(prompt("Escriba la cantidad de fuerza"));
    var distancia = (trabajo / fuerza);
    document.write("Trabajo = " + trabajo + " J <br>");
    document.write("Fuerza = " + fuerza + " N <br>");
    document.write("La distancia es: " + distancia.toFixed(2) + "m <br>");
    document.write("D = T/F <br>");
    document.write("D = " + fuerza + " N / " + trabajo + " J <br>");
    document.write("D = " + distancia + "m");
}
else{
    alert("Actualice la página y escriba un valor válido")
}
