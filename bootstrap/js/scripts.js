
/*----------------------------------------------------------------
----------------------EXPLICACIONES ACCIONES----------------------
----------------------------------------------------------------*/

//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// 1.- Comprobar si existe matrícula en index

    // si sólo queremos comprobar si existe una matrícula en el sistema



function accion1(){

    var matricula = prompt("Introduce una matrícula");  //se solicita al usuario una matrícula, sin crear una nueva ventana

    var estaRepetida = matriculaRepetida(matricula);    //la función matriculaRepetida, pasándole una matrícula como parámetro, devolverá TRUE si está repetida. Ver en FUNCIONES AUXILIARES.

    if (estaRepetida){      //también podría evaluarse directamente sin la asignación previa, asi:  if ( matriculaRepetida(matricula) ){ ...

        alert("La matrícula " + matricula + " ya existe");
    }
    else{

        alert("La matrícula " + matricula + " no existe");
    }
}













// 2.- Comprobar si existe matrícula en ventana auxiliar 

    // igual que el anterior, pero desde una ventana auxiliar


function accion2(){     // abrimos una nueva ventana desde la que solicitamos datos. Por tanto, necesitaremos OPENER para acceder al Array que está en index

    var ventanaMatricula = window.open('paneles/ventanaMatricula.html', 'Consulta parking', 'scrollbars=yes,height=520,width=600');
}


function compruebaMatriculaDesdeVentana(){

    var matricula = document.getElementById('matricula').value; 

    var estaRepetida = opener.matriculaRepetida(matricula);    //ejecutamos la función de comprobación haciendo uso de OPENER, para que la aplique sobre el index, donde sí está el array de garaje

    if (estaRepetida){     

        alert("La matrícula " + matricula + " ya existe");
    }
    else{

        alert("La matrícula " + matricula + " no existe");
    }
}














// 3.- Buscar instancia de coche por marícula en index

    // si no sólo queremos comprobar si existe la matrícula, sino que además queremos hacer uso de cualquier dato (precio, modelo...) de una instancia ya guardada a patrir de su matrícula, necesitamos que la aplicación nos devuelva la propia instancia para poder aplicarle cualquiera de los métodos que hayamos creado



function accion3(){

    var matricula = prompt("Introduce una matrícula");

    var objetoCoche = devolverObjetoCoche(matricula);   // la función devolverObjetoCoche, pasándole una matrícula como parámetro, devolverá FALSE si no existe una instancia con esa matrícula, o la propia instancia de objeto si existe. Ver en FUNCIONES AUXILIARES.

    if( objetoCoche === false){                         // si "objetoCoche" es FALSE, es porque no existe.

        alert("Esa matrícula no se encuentra en el garage");
    }
    else{                                               // en cualquier otro caso, "objetoCoche" tendrá asignada la propia instancia, sobre la que podemos aplicar cualquiera de nuestros métodos:

        alert("Sí existe ese coche, por lo que puedo darte todos sus datos:");

        alert("Su modelo es " + objetoCoche.getModelo() + ", y su marca es " + objetoCoche.getMarca());

        alert("Su coste fué de " + objetoCoche.getPrecio() + "€, y puedo calcular cuánto IVA habría que sumarle para venderlo: " + objetoCoche.getPrecio() * 0.21);

        alert("Como tiene " + objetoCoche.getPotencia() + " caballos de potencia, así que podría calcular a partir de este dato el consumo de gasolina, por ejemplo.");

    }
}












// 4.- Buscar instancia de coche por marícula en ventana auxiliar

    // igual que el anterior, pero desde una ventana auxiliar



function accion4(){     // abrimos una nueva ventana desde la que solicitamos datos. Por tanto, necesitaremos OPENER para acceder al Array que está en index

    var ventanaObjeto = window.open('paneles/ventanaobjeto.html', 'Consulta parking', 'scrollbars=yes,height=520,width=600');
}


function traerObjetoDesdeVentana(){

    var matricula = document.getElementById('matricula').value; 

    var objetoCoche = opener.devolverObjetoCoche(matricula);   // utilizamos OPENER para que la ventana auxiliar pueda hacer uso del Array que está en index. todo lo demás es igual.

    var texto = "";

    if( objetoCoche === false){ 

        texto += "¡Ops! Parece que no existe esa matrícula.";
    }
    else{                                               

        texto += "Sí existe ese coche, por lo que puedo transferir a esta ventana auxiliar todos sus datos:";

        texto += "Su modelo es " + objetoCoche.getModelo() + ", y su marca es " + objetoCoche.getMarca();

        texto += "Su coste fué de " + objetoCoche.getPrecio() + "€, y puedo calcular cuánto IVA habría que sumarle para venderlo: " + objetoCoche.getPrecio() * 0.21;

        texto += "Como tiene " + objetoCoche.getPotencia() + " caballos de potencia, así que podría calcular a partir de este dato el consumo de gasolina, por ejemplo.";

    }

    document.getElementById('textoResultado').innerHTML = texto;

}







/*----------------------------------------------------------------
----------------------FUNCIONES AUXILIARES-----------------------
----------------------------------------------------------------*/

function muestraValorRange(val) {
    document.getElementById('valorRange').innerHTML = val; 
}


function guardaDatosAltaCoche(nuevoCoche) {
    garajeVehiculos.push(nuevoCoche);
    document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
}


function matriculaRepetida(matricula){                      // se le envía como parámetro la matrícula a analizar

    for (var i = 0; i < garajeVehiculos.length; i++) {      // entra en un bucle con tantas vueltas como posiciones tenga el garaje

        var cocheActual = garajeVehiculos[i];               // asigna a "cocheActual" la instancia de coche presente en la posición i del Array (garajeVehiculos[i])

        var matriculaActual = cocheActual.getMatricula();   // asigna a "matriculaActual" la matrícula de esa instancia de coche aplicándole al "cocheActual" el método getMatricula()

        if (matricula == matriculaActual){                  // evalúa si la matrícula que se le ha pasado como parámetro es igual a la de esa instancia.

            return true;                                    // si son iguales, devuelve true. en caso contrario, devuelve false.
        }
        else{
            return false;
        }
    }
}


function listarCoches(){
    var listaCoches = "Los coches guardados en el sistema son los siguientes:<br><br>";

    if (garajeVehiculos.length === 0){
        alert("No hay coches en el garaje");
    }

    else{

        for (var i = 0; i < garajeVehiculos.length; i++) {

            var cocheActual = garajeVehiculos[i];

            var matriculaActual = cocheActual.getMatricula();
            var marcaActual = cocheActual.getMarca();
            var modeloActual = cocheActual.getModelo();
            var fechaActual = cocheActual.getFecha();

            var formatoFecha = { year: 'numeric', month: 'short', day: 'numeric' };
            var fechaCorta = fechaActual.toLocaleString('es-ES', formatoFecha);

            listaCoches += matriculaActual + ": marca " + marcaActual + ", modelo " + modeloActual + " con fecha de matriculación " + fechaCorta + "<br><br>";           

            var ventanaListaCoches = window.open("", 'Listado coches', 'scrollbars=yes,width=600,height=820');           

        }

        ventanaListaCoches.document.write(listaCoches);
    }
}


function calcularPVP(){

    var matricula = prompt("Introduzca la matrícula");

    var objetoCoche = devolverObjetoCoche(matricula);

    if( objetoCoche === false){
        alert("Esa matrícula no se encuentra en el garage");
    }
    else{
        var PVP = Number(objetoCoche.getPrecio()) + Number(objetoCoche.getPrecio()) * 0.21;
        alert("El precio de venta del coche es " + PVP);
    }
}



function devolverObjetoCoche(matricula){

    for (var i = 0; i < garajeVehiculos.length; i++) {

        var cocheActual = garajeVehiculos[i];

        var matriculaActual = cocheActual.getMatricula();

        var existeCoche = false;

        if (matricula == matriculaActual){

            return cocheActual;
            existeCoche = true;
        }  
    }

    if (!existeCoche){
        return false;
    }
}





var saldoEstabecido = false;
var contabilidad;

function establecerSaldo(){

    if (saldoEstabecido){
        alert("Imposible establecer saldo inicial. Ya se ha establecido un saldo. El saldo actual es de " + contabilidad.getSaldo() + "€");   
    }

    else{       

        var saldoInicial = prompt("Indique el saldo inicial");

        if (saldoInicial === null){

            alert("Imposible crear asiento contable. No se enviaron los datos.");

        }

        else if (isNaN(saldoInicial) || saldoInicial.length===0 || /^\s+$/.test(saldoInicial)){

            alert("Imposible crear asiento contable. Valor inoperable.");

        }

        else{

            saldoEstabecido = true;

            contabilidad = new Cuenta();

            contabilidad.setSaldo(Number(saldoInicial));

            alert("Se ha creado un asiento incial en la contabilidad de " + contabilidad.getSaldo() + "€");         


        }        

    }

}


function comprobarSaldo(){

    if(contabilidad === undefined){

        alert("No existe una cuenta contable. Establezca un saldo incial.");

    }
    else{

        alert(contabilidad.getSaldo());

    }    

}

function Reloj() {

			  var fechaHora = new Date();
			  var horas = fechaHora.getHours();
			  var minutos = fechaHora.getMinutes();
			  var segundos = fechaHora.getSeconds();
			 
			  if(horas < 10) { horas = '0' + horas; }
			  if(minutos < 10) { minutos = '0' + minutos; }
			  if(segundos < 10) { segundos = '0' + segundos; }			  
			 
			  document.getElementById("horas").innerHTML = horas+':'+minutos+':'+segundos;

			}
 
			  setInterval(Reloj, 1000);
                          
function fecha(){
    var fecha=new Date();
    var dia=fecha.getDate();
    var mes=fecha.getMonth()+1;
    var anho=fecha.getFullYear();
     if(dia < 10) { 
        dia ="0" + dia; }
    if(mes < 10) { 
        mes="0" + mes; }
    
document.getElementById("fecha").innerHTML= dia+"/"+mes+"/"+anho;
    
   
}
fecha();

function destruirVehiculo(){
    var matricula = prompt("Introduce una matrícula");

    var objetoCoche = devolverObjetoCoche(matricula);   

    if( objetoCoche === false){
        alert("Esa matrícula no se encuentra en el garage");
    }
    else{ 
        var costeDestruccion=Number(prompt("Introduce el coste de la destrucción"));
        if (costeDestruccion === null){

            alert("Ha ocurrido un error. No se enviaron los datos.");

        }
        else if (isNaN(costeDestruccion) || costeDestruccion.length===0 || /^\s+$/.test(costeDestruccion)){

            alert("Valor incorrecto.");
            
        } else {
        for (var i = 0; i < garajeVehiculos.length; i++) { 

        var cocheActual = garajeVehiculos[i]; 

        var matriculaActual = cocheActual.getMatricula(); 

        if (matricula == matriculaActual){        
            if (contabilidad===undefined){
             alert("No existe una cuenta contable. Establezca un saldo incial.");
            } else {
            garajeVehiculos.splice(i,1);
            contabilidad.setGasto(costeDestruccion);
            alert("El vehículo ha sido destruido");
            alert("El gasto ha sido descontado de su cuenta.");
            document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
        }
        }
    }
        }
    }
}

function venderCoche(){
    var matricula = prompt("Introduce una matrícula");

    var objetoCoche = devolverObjetoCoche(matricula);   

    if( objetoCoche === false){
        alert("Esa matrícula no se encuentra en el garage");
    }
    else{ 
        var precioVenta=Number(prompt("Introduce el precio de venta"));
        if (precioVenta === null){

            alert("Ha ocurrido un error. No se enviaron los datos.");

        }
        else if (isNaN(precioVenta) || precioVenta.length===0 || /^\s+$/.test(precioVenta)){

            alert("Valor incorrecto.");
            
        } else {
        for (var i = 0; i < garajeVehiculos.length; i++) { 

        var cocheActual = garajeVehiculos[i]; 

        var matriculaActual = cocheActual.getMatricula(); 

        if (matricula == matriculaActual){        
            if (contabilidad===undefined){
             alert("No existe una cuenta contable. Establezca un saldo incial.");
            } else {
            garajeVehiculos.splice(i,1);
            contabilidad.setIngreso(precioVenta);
            alert("El vehículo ha sido vendido");
            alert("El ingreso ha sido aplicado a su cuenta.");
            document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
        }
        }
    }
        }
    }
}
                   

/*----------------------------------------------------------------
----------------------VENTANAS AUXILIARES-------------------------
----------------------------------------------------------------*/

function panelCoche(){
   var ventanaCoche= window.open("paneles/nuevovehiculo.html", 'Alta nuevo coche', 'scrollbars=yes,width=600,height=820');
}


function calcularSER(){
    var ventanaSER = window.open('paneles/estacionamiento.html', 'Consulta parking', 'scrollbars=yes,height=520,width=600');
}

function calcularViaje(){
    var ventanaViaje=window.open('paneles/viaje.html', 'Calcular precio viaje', 'scrollbars=yes,width=650,height=820');
}
/*----------------------------------------------------------------
--------------------VALIDACIONES FORUMLARIOS----------------------
----------------------------------------------------------------*/

function validar(){

    var matricula, marca, modelo, fecha, caballos, plazas, estrellas;
    
    matricula=document.getElementById("matricula").value;
    marca=document.getElementById("marca").value;
    modelo=document.getElementById("modelo").value;
    caballos=document.getElementById("caballos").value;
    plazas=document.getElementById("plazas").selectedIndex;
    estrellas=document.getElementsByName("estrellas");
    
    var errores="El formulario contiene los siguientes errores: <br>";

    
    if (matricula===null||marca===null||modelo===null||fecha===null||caballos===null||plazas===null){
        alert("No se envió la información");
        return false;
    } else {
        if (matricula===""||!/^\d{4}\s[A-Z]{3}$/.test(matricula)||/^\s+$/.test(matricula)){
            alert("Matrícula no válida. El formato tiene que ser 0000 AAA");
            return false;
        } else if (marca===""||/^\s+$/.test(marca)||/[0-9]/.test(marca)||marca.length<2||marca.length>10) {
            alert("Marca no válida. La marca sólo puede contener letras y debe tener menos de 10 caracteres.");
        return false;
    } else if (modelo===""||/^\s+$/.test(modelo)||modelo.length<2||modelo.length>10){
            alert("Modelo no válido. El modelo debe tener entre 2 y 10 caracteres.");
        return false;

    } else if (caballos===""||/^\s+$/.test(caballos)||!/^\d{2,4}$/.test(caballos)) {
            alert("Caballos no válidos.");
        return false;
        } else if (plazas===0){
            alert("Seleccione un número de plazas.");
            return false;
            } else {
    
    var E = document.getElementsByName("estrellas");
    var R = -1;
    
        for(var i=0; i < E.length; i++){
            if(E[i].checked) {
                  R = i; 
                 }
        }
    
        if (R===-1){
                  alert("Seleccione una valoración.");
                  return false;
            } else {
                 alert("Datos correctos. Enviando...");
                 return true;
            }
          
    
    
            }
            }
           
            }
            
    /* validaciones:
     * 
     * - La matrícula tiene que estar compuesta por 4 números, un espacio y tres letras.
     * - La marca no puede contener números y tiene que tener entre 2 y 10 letras.
     * - El modelo tiene que tener entre 2 y 10 caracteres.
     * - La fecha tiene que tener el formato dd/mm/aaaa.
     * - Los caballos tienen que ser entre dos y cuatro números.
     * - Tiene que seleccionarse una opción de plazas.
     * - Tiene que seleccionarse una opción de estrellas.
     */




function validarFormularioSER() {

    with (document) {

        var matricula=getElementById("matricula").value;
        var zonaIndice=getElementById("zona").selectedIndex;
        var zonaTexto=getElementById("zona")[zonaIndice].text;
        var horas=getElementById("horas").value;
    

        if(matricula===null || zona===null || horas===null){

            alert("Error: no se envió la información");
            return false;

        }else{

            if (opener.devolverObjetoCoche(matricula)==false){
                alert("La matrícula " + matricula + " no se encuentra en el garaje");
            }

            else if (zonaIndice === 0){                
                alert("En la zona blanca no pagamos en Madrid! Yihaaaa!");
            }

            else{   

                var cocheActual = opener.devolverObjetoCoche(matricula);

                var fecha = cocheActual.getFecha();
                var anho = fecha.getFullYear();

                var costeZona = 3;
                if (zonaIndice == 2){
                    costeZona = 4;
                }

                var costeAnho = 0.10;
                if (anho < 2006){
                    anho = 0.25;
                }

                var resultado = horas * costeZona * costeAnho;

                var mensaje = "Aparcar en la zona " + zonaTexto + " con un coche del año " + anho + " durante " + horas + " horas son " + resultado +"€";

                document.getElementById("mensajes").innerHTML = mensaje;
            }
        }
    }
}


function validarViaje(){
    with (document) {
        var matricula=getElementById("matricula").value;
        var peaje=getElementById("peaje").selectedIndex;
        var km=getElementById("km").value;
        var consumo=getElementById("consumo").value;
        var menores=getElementById("menores").value;
        }
        
       if(matricula===null || peaje===null || km===null || consumo===null || menores===null){

            alert("Error: no se envió la información");
            return false;
        } else {
            if (opener.devolverObjetoCoche(matricula)===false){
                alert("La matrícula " + matricula + " no se encuentra en el garaje");
            } else if (km===""){
                alert("Introduzca un número válido de kilómetros.");
            } else if (consumo===""){
                alert("Introduzca un número válido de consumo");
            } else if (menores===""){
                alert("Introduzca un número válido de menores (0 si no viaja ninguno)");
            }/* else if (menores>plazas || menores==plazas){
                alert("Debe haber por lo menos un adulto en el vehículo.");
            } */else {
            var cocheActual=opener.devolverObjetoCoche(matricula);
            var plazas=cocheActual.getPlazas();   
            var precio="El importe total a pagar es de ";
            var fecha=cocheActual.getFecha();
            var anho=fecha.getFullYear();
            var fechaActual=new Date();
            var anhoPasado6=fechaActual.getFullYear()-6;
            var resultado=km*consumo;
            var comida=plazas*6;
            var total=resultado+comida;
            
            if (peaje===0){
                  if (anho<anhoPasado6){
                      total=total+16;
                      precio+=total + "€" + "<br>" + "Se han añadido al precio total 10€ por peaje." + "<br>" + "Se han añadido 6€ al precio total por tener una matrícula de más de 6 años de antigüedad.";
                  } 
                else {
                  total=total+10;
                  precio+=total + "€" + "<br>" + "Se han añadido al precio total 10€ por peaje."; 
                    }
                    
             
             } 
            else {
                 
                 precio+=total + "€";
             }
             precio+="<br>" + "Se han incluído en el precio total los 6€ de comida por plaza del vehículo.";
             document.getElementById("mensajes").innerHTML=precio;
    }
    
}
}



            
    


/*----------------------------------------------------------------
------------------------CONSTRUCTOR COCHES------------------------
----------------------------------------------------------------*/

function Coche(){

    var _matricula, _marca, _modelo, _precio, _estrellas, _potencia, _plazas, _fecha;

    this.constructorCoche=function(matricula, marca, modelo, objFecha, plazas, potencia, estrellas, precio){
        this.setMatricula(matricula);
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setFecha(objFecha);
        this.setPlazas(plazas);
        this.setPotencia(potencia);
        this.setEstrellas(estrellas);
        this.setPrecio(precio);
    }

    this.getFecha=function(){
       return this._fecha;
    }

    this.setFecha=function(valor){
       this._fecha=valor;
    }

    this.getPlazas=function(){
       return this._plazas;
    }

    this.setPlazas=function(valor){
       this._plazas=valor;
    }

    this.getPotencia=function(){
       return this._potencia;
    }

    this.setPotencia=function(valor){
       this._potencia=valor;
    }

    this.getEstrellas=function(){
       return this._estrellas;
    }

    this.setEstrellas=function(valor){
       this._estrellas=valor;
    }

    this.getPrecio=function(){
       return this._precio;
    }

    this.setPrecio=function(valor){
       this._precio=valor;
    }

    this.getMatricula=function(){
       return this._matricula;
    }

    this.setMatricula=function(valor){
       this._matricula=valor;
    }

    this.getMarca=function(){
       return this._marca;
    }

    this.setMarca=function(valor){
       this._marca=valor;
    }

    this.getModelo=function(){
       return this._modelo;
    }

    this.setModelo=function(valor){
       this._modelo=valor;
    }    

}

function Cuenta(){

    var _saldo;

    this.constructorSaldo=function(saldo){
        this.setSaldo(saldo);
    }

    this.setSaldo=function(valor){
       this._saldo=valor;
    }

    this.setIngreso=function(valor){
       this._saldo+=valor;
    }

    this.setGasto=function(valor){
       this._saldo-=valor;
    }

    this.getSaldo=function(){
       return this._saldo;
    }

}