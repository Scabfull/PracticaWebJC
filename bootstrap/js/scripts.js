
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

function ComprobarPrecio() {
    var matricula = prompt("Introduce una matrícula:");
    var objetoCoche = devolverObjetoCoche(matricula);
    if (objetoCoche === false) {
        alert("Esa matrícula no se encuentra en el garage");
    } else {
            var horas = prompt("Introduce el número de minutos que has estacionado:");
            if (!/^\d{0,3}$/.test(horas) || /^\s+$/.test(horas) || horas == null || horas === "") {
                alert("El numero de minutos no es correcto.");
            } else {
                if (horas >= 0 && horas <= 30){
                    var precio = 0.0425 * horas;
                    alert ("El precio a pagar es de " + precio.toFixed(2) + "€");
                } else if (horas > 30 && horas <=90){
                    var precio = 0.0382 * horas;
                    alert ("El precio a pagar es de " + precio.toFixed(2) + "€");
                } else if (horas > 90 && horas <= 660){
                    var precio = 0.0508 * horas;
                    alert ("El precio a pagar es de " + precio.toFixed(2) + "€");
                } else {
                    var precio = 32.50;
                    alert ("El precio a pagar es de " + precio.toFixed(2) + "€");
                }
            }


    }
}

function modificarCoche(){
    var matricula = prompt("Introduce una matrícula:");

    var objetoCoche = devolverObjetoCoche(matricula);   

    if (objetoCoche === false) {                    

        alert("Esa matrícula no se encuentra en el garage");
    }
    else {
        var count = 0;
$('#mainModal2').on('show.bs.modal', function(){
count++;		
        //Uso el método .empty() para eliminar todo el contenido dentro de .modal-body
		$('#mainModal2 .modal-body').empty();
    $('#mainModal2 .modal-body').append("El contenido es dinámico, esta es la vez número "+count+" que abriste el modal!");

})
       // alert("Su modelo es " + objetoCoche.getModelo() + ", y su marca es " + objetoCoche.getMarca());
       //href="#mainModal2" 
        
    }
}


function matriculaRepetida(matricula) {                      // se le envía como parámetro la matrícula a analizar

    for (var i = 0; i < garajeVehiculos.length; i++) {      // entra en un bucle con tantas vueltas como posiciones tenga el garaje

        var cocheActual = garajeVehiculos[i];               // asigna a "cocheActual" la instancia de coche presente en la posición i del Array (garajeVehiculos[i])

        var matriculaActual = cocheActual.getMatricula();   // asigna a "matriculaActual" la matrícula de esa instancia de coche aplicándole al "cocheActual" el método getMatricula()

        if (matricula == matriculaActual) {                  // evalúa si la matrícula que se le ha pasado como parámetro es igual a la de esa instancia.

            return true;                                    // si son iguales, devuelve true. en caso contrario, devuelve false.
        }

    }
    return false;
}


function listarCoches() {
    var listaCoches = "Los coches guardados en el sistema son los siguientes:<br><br>";

    if (garajeVehiculos.length === 0) {
        alert("No hay coches en el garaje");
    }

    else {

        for (var i = 0; i < garajeVehiculos.length; i++) {

            var cocheActual = garajeVehiculos[i];

            var matriculaActual = cocheActual.getMatricula();
            var marcaActual = cocheActual.getMarca();
            var modeloActual = cocheActual.getModelo();
            var caballosActual = cocheActual.getPotencia();
            var estrellasActual = cocheActual.getEstrellas();
            var plazasActual = cocheActual.getPlazas();

            document.getElementById('lista1').innerHTML = listaCoches += matriculaActual + ": Marca: " + marcaActual + " | Modelo: " + modeloActual + " | Caballos: " + caballosActual + " | Estrellas EURO NCAP: " + estrellasActual + " | Plazas: " + plazasActual + "<br><br>";


        }


    }
}


function devolverObjetoCoche(matricula) {

    for (var i = 0; i < garajeVehiculos.length; i++) {

        var cocheActual = garajeVehiculos[i];

        var matriculaActual = cocheActual.getMatricula();

        var existeCoche = false;

        if (matricula == matriculaActual) {

            return cocheActual;
            existeCoche = true;
        }
    }

    if (!existeCoche) {
        return false;
    }
}




function Reloj() {

    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }

    document.getElementById("horas").innerHTML = horas + ':' + minutos + ':' + segundos;

}

setInterval(Reloj, 1000);

function fecha() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anho = fecha.getFullYear();
    if (dia < 10) {
        dia = "0" + dia;
    }
    if (mes < 10) {
        mes = "0" + mes;
    }

    document.getElementById("fecha").innerHTML = dia + "/" + mes + "/" + anho;


}

fecha();

function destruirVehiculo() {
    var matricula = prompt("Introduce una matrícula");

    var objetoCoche = devolverObjetoCoche(matricula);

    if (objetoCoche === false) {
        alert("Esa matrícula no se encuentra en el garage");
    }
    else {

        for (var i = 0; i < garajeVehiculos.length; i++) {

            var cocheActual = garajeVehiculos[i];

            var matriculaActual = cocheActual.getMatricula();

            if (matricula == matriculaActual) {
                var confirmar = confirm("¿Seguro que quieres retirar el vehículo?");
                if (confirmar == true) {
                    garajeVehiculos.splice(i, 1);
                    alert("El vehículo ha sido retirado");
                    document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
                } else {
                    alert("El vehículo no ha sido retirado");
                }


            }
        }
    }
}


/*----------------------------------------------------------------
--------------------VALIDACIONES FORUMLARIOS----------------------
----------------------------------------------------------------*/

function validar() {

    var matricula, marca, modelo, fecha, caballos, plazas, estrellas;

    matricula = document.getElementById("matricula").value;
    marca = document.getElementById("marca").value;
    modelo = document.getElementById("modelo").value;
    caballos = document.getElementById("caballos").value;
    plazas = document.getElementById("plazas").selectedIndex;
    estrellas = document.getElementsByName("estrellas");

    var errores = "El formulario contiene los siguientes errores: <br>";


    if (matricula === null || marca === null || modelo === null || fecha === null || caballos === null || plazas === null) {
        alert("No se envió la información");
        return false;
    } else {
        if (matricula === "" || !/^\d{4}\s[A-Z]{3}$/.test(matricula) || /^\s+$/.test(matricula)) {
            alert("Matrícula no válida. El formato tiene que ser 0000 AAA");
            return false;
        } else if (marca === "" || /^\s+$/.test(marca) || /[0-9]/.test(marca) || marca.length < 2 || marca.length > 10) {
            alert("Marca no válida. La marca sólo puede contener letras y debe tener menos de 10 caracteres.");
            return false;
        } else if (modelo === "" || /^\s+$/.test(modelo) || modelo.length < 2 || modelo.length > 10) {
            alert("Modelo no válido. El modelo debe tener entre 2 y 10 caracteres.");
            return false;

        } else if (caballos === "" || /^\s+$/.test(caballos) || !/^\d{2,4}$/.test(caballos)) {
            alert("Caballos no válidos.");
            return false;
        } else if (plazas === 0) {
            alert("Seleccione un número de plazas.");
            return false;
        } else {

            var E = document.getElementsByName("estrellas");
            var R = -1;

            for (var i = 0; i < E.length; i++) {
                if (E[i].checked) {
                    R = i;
                }
            }

            if (R === -1) {
                alert("Seleccione una valoración.");
                return false;
            } else {
                var repetida = matriculaRepetida(matricula);
                if (repetida == true) {
                    alert("Este coche ya se encuentra registrado");
                    return false;
                } else {
                    coche1 = new Coche();
                    coche1.constructorCoche(matricula, marca, modelo, estrellas, caballos, plazas);
                    garajeVehiculos.push(coche1);
                    document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
                    alert("El coche ha sido guardado");
                    return true;
                }

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

        var matricula = getElementById("matricula").value;
        var zonaIndice = getElementById("zona").selectedIndex;
        var zonaTexto = getElementById("zona")[zonaIndice].text;
        var horas = getElementById("horas").value;


        if (matricula === null || zona === null || horas === null) {

            alert("Error: no se envió la información");
            return false;

        } else {

            if (opener.devolverObjetoCoche(matricula) == false) {
                alert("La matrícula " + matricula + " no se encuentra en el garaje");
            }

            else if (zonaIndice === 0) {
                alert("En la zona blanca no pagamos en Madrid! Yihaaaa!");
            }

            else {

                var cocheActual = opener.devolverObjetoCoche(matricula);

                var fecha = cocheActual.getFecha();
                var anho = fecha.getFullYear();

                var costeZona = 3;
                if (zonaIndice == 2) {
                    costeZona = 4;
                }

                var costeAnho = 0.10;
                if (anho < 2006) {
                    anho = 0.25;
                }

                var resultado = horas * costeZona * costeAnho;

                var mensaje = "Aparcar en la zona " + zonaTexto + " con un coche del año " + anho + " durante " + horas + " horas son " + resultado + "€";

                document.getElementById("mensajes").innerHTML = mensaje;
            }
        }
    }
}

/*----------------------------------------------------------------
------------------------CONSTRUCTOR COCHES------------------------
----------------------------------------------------------------*/

function Coche() {

    var _matricula, _marca, _modelo, _estrellas, _potencia, _plazas;

    this.constructorCoche = function (matricula, marca, modelo, plazas, potencia, estrellas) {
        this.setMatricula(matricula);
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setPlazas(plazas);
        this.setPotencia(potencia);
        this.setEstrellas(estrellas);
    }

    this.getPlazas = function () {
        return this._plazas;
    }

    this.setPlazas = function (valor) {
        this._plazas = valor;
    }

    this.getPotencia = function () {
        return this._potencia;
    }

    this.setPotencia = function (valor) {
        this._potencia = valor;
    }

    this.getEstrellas = function () {
        return this._estrellas;
    }

    this.setEstrellas = function (valor) {
        this._estrellas = valor;
    }
    this.getMatricula = function () {
        return this._matricula;
    }

    this.setMatricula = function (valor) {
        this._matricula = valor;
    }

    this.getMarca = function () {
        return this._marca;
    }

    this.setMarca = function (valor) {
        this._marca = valor;
    }

    this.getModelo = function () {
        return this._modelo;
    }

    this.setModelo = function (valor) {
        this._modelo = valor;
    }

}