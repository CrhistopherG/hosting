var temp = parseInt(prompt("Ingrese la temperatura a convertir \n1) Celsius \n2) Fahrenheit \n3) Kelvin"));
var grados = parseInt(prompt("Ingrese los grados"));

if (temp == 1) {
    parseFloat(kelvin = grados + 273.15);
    parseFloat(fahrenheit = (9*grados)/5 + 32);
    document.write(grados + " ºC es igual a: <br>");
    document.write(kelvin + " ºK <br>");
    document.write(fahrenheit + " ºF <br>");
}
if (temp == 2) {
    parseFloat(celsius = (5*(grados-32))/9);
    parseFloat(kelvin = (((5*(grados-32)/9)+273.15)));
    document.write(grados + " ºF es igual a: <br>");
    document.write(celsius + " ºC <br>");
    document.write(kelvin + " ºK <br>");
}
if (temp == 3) {
    parseFloat(celsius = grados-273.15);
    parseFloat(fahrenheit = (9*(grados-273.15))/5 + 32);
    document.write(grados + " ºK es igual a: <br>");
    document.write(celsius.toFixed(2) + " ºC <br>");
    document.write(fahrenheit.toFixed(2) + " ºF <br>");
}
else{
    alert("Actualice la página y escriba un valor válido");
}