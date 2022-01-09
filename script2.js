var unidad = prompt("Elija la unidad a calcular: \n1) Energía cinética \n2) Energía potencial");
if (unidad == 1){
    var masa = prompt("Escriba la cantidad de masa");
    var velocidad = parseInt(prompt("Escriba la cantidad de velocidad"));
    var cinetica = (masa * (velocidad**2))/2;
    document.write("Masa = " + masa + "kg <br>");
    document.write("Velocidad = " + velocidad + "m/s <br>");
    document.write("Ec = (mv^2)/2 <br>");
    document.write("Ec = " + masa + " kg * " + velocidad + "m/s <br>");
    document.write("Ec = " + cinetica + " J <br>");
    document.write("La energía cinética es: " + cinetica + " J <br>");
}
else if (unidad == 2){
    var masa = prompt("Escriba la cantidad de masa");
    var altura = prompt("Escriba la cantidad de altura");
    const gravedad = 9.81;
    var potencial = (masa * gravedad * altura);
    document.write("Masa = " + masa + " kg <br>");
    document.write("Gravedad = " + gravedad + "m<br>");
    document.write("Altura = " + altura + "m <br>")
    document.write("Ep = mgh <br>");
    document.write("Ep = " + masa + " kg * " + gravedad + "m/s^2 * " + altura + "m <br>");
    document.write("Ep = " + potencial + " J <br>");
    document.write("La energía potencial es: " + potencial + " J <br>");
}
/* else if (unidad == 3){
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
else if (unidad == 4){
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
 */
else{
    alert("Actualice la página y escriba un valor válido")
}