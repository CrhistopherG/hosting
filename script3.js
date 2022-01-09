var unidad = parseInt(prompt("Elija la unidad a calcular: \n1) Potencia \n2) Trabajo"));
if (unidad == 1){
    var fuerza = parseInt(prompt("Escriba la cantidad de trabajo"));
    var distancia = parseInt(prompt("Escriba la cantidad de tiempo"));
    var trabajo = (fuerza / distancia);
    document.write("Fuerza = " + fuerza + " J <br>");
    document.write("Tiempo = " + distancia + "s <br>");
    document.write("Potencia = T/t <br>");
    document.write("Potencia = " + fuerza + " J / " + distancia + "s <br>");
    document.write("Potencia = "+ trabajo + " J/s <br>");
    document.write("La potencia es: " + trabajo + " J/s <br>");
}
else if (unidad == 2){
    var potencia = parseInt(prompt("Escriba la cantidad de potencia"));
    var tiempo = parseInt(prompt("Escriba la cantidad de tiempo"));
    var trabajo = (potencia * tiempo);
    document.write("Potencia = " + potencia + " W <br>");
    document.write("Tiempo = " + tiempo + "s<br>");
    document.write("Trabajo = P*t <br>");
    document.write("Trabajo = " + potencia + " W * " + tiempo + "s <br>");
    document.write("Trabajo = "+ trabajo + " J<br>");
    document.write("El trabajo es: " + trabajo + " J <br>");
}
else{
    alert("Actualice la página y escriba un valor válido")
}