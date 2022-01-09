var temp = parseInt(prompt("Ingrese la temperatura a convertir \n1) Celsius \n2) Fahrenheit \n3) Kelvin"));

if (temp == 1) {
    var grados = parseInt(prompt("Ingrese los grados"));
    parseFloat(kelvin = grados + 273.15);
    parseFloat(fahrenheit = ((grados*1.8)+32));
    document.write(grados + " ºC es igual a: <br>");
    document.write(kelvin + " ºK <br>");
    document.write(fahrenheit + " ºF <br>");
}
else if (temp == 2) {
    var grados = parseInt(prompt("Ingrese los grados"));
    parseFloat(celsius = ((grados-32)/1.8));
    parseFloat(kelvin = ((grados-32)*(5/9)+273.15));
    document.write(grados + " ºF es igual a: <br>");
    document.write(celsius + " ºC <br>");
    document.write(kelvin + " ºK <br>");
}
else if (temp == 3) {
    var grados = parseInt(prompt("Ingrese los grados"));23
    parseFloat(celsius = grados-273.15);
    parseFloat(fahrenheit = ((1.8(grados-273.15)+32)));
    document.write(grados + " ºK es igual a: <br>");
    document.write(celsius.toFixed(2) + " ºC <br>");
    document.write(fahrenheit.toFixed(2) + " ºF <br>");
}
else{
    alert("Actualice la página y escriba un valor válido");
}