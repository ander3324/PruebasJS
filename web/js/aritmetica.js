/* 
 * Ejemplo de script para el Curso Java 2 - 2015
 */

function sumar(){
    
    var v1 = parseInt(document.getElementById("n1").value);
    var v2 = parseInt(document.getElementById("n2").value);
    var res = v1 + v2;
    var salida = document.getElementById("res");
    
    salida.innerHTML = "Resultado: " + res.toString();
}

function dividir(){
    var v1 = parseInt(document.getElementById("dv1").value);
    var v2 = parseInt(document.getElementById("dv2").value);
    var res;
    
    if(v2 !== 0)
        res = v1 / v2;
    else
        res = "No se puede dividir por cero";
    
    var salida = document.getElementById("coc");
    
    salida.innerHTML = "Resultado: " + res.toString();
}

function calcularEdad(){
    
    var fecActual = new Date();
    var fecNac = document.getElementById("fecha").value;
    var salida = document.getElementById("edad");
    var valores = fecNac.split("-");
    
    //Fecha de nacimiento:
    var an = valores[0];
    var mn = valores[1];
    var dn = valores[2];
    
    //Fecha actual:
    var aa = fecActual.getFullYear();
    var ma = (fecActual.getMonth() + 1);
    var da = fecActual.getDate();
    
    var edad;
    
    if(ma < mn || (ma == mn && da < dn))
        edad = aa - an - 1;
    else
        edad = aa - an;
         
    salida.innerHTML = "Tienes " + edad + " años.";
    
}

