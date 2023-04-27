
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
var garajeVehiculos = new Array();


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
    var listaCoches = new Array();
    var coche = new Array();
    var id;

    for (var i = 0; i < garajeVehiculos.length; i++) {

        var cocheActual = garajeVehiculos[i];

        var matriculaActual = cocheActual.getMatricula();
        var marcaActual = cocheActual.getMarca();
        var modeloActual = cocheActual.getModelo();
        var conductorActual = cocheActual.getConductor().getNombre();
        id = i + 1;

        coche = [id, matriculaActual, marcaActual, modeloActual, conductorActual];
        listaCoches.push(coche);
    }
    return listaCoches;


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

setInterval(Reloj, 500);

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

setInterval(fecha, 500);



/*----------------------------------------------------------------
------------------------CONSTRUCTOR COCHES------------------------
----------------------------------------------------------------*/

function Coche() {

    var _matricula, _marca, _modelo, _conductor;

    this.constructorCoche = function (matricula, marca, modelo, conductor = {}) {
        this.setMatricula(matricula);
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setConductor(conductor);
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

    this.getConductor = function () {
        return this._conductor;
    }

    this.setConductor = function (valor) {
        this._conductor = valor;
    }

}


function Conductor() {

    var _nombre, _telefono, _codigoPostal;

    this.constructorConductor = function (nombre, telefono, codigoPostal) {
        this.setNombre(nombre);
        this.setTelefono(telefono);
        this.setCodigoPostal(codigoPostal);
    }

    this.getNombre = function () {
        return this._nombre;
    }

    this.setNombre = function (valor) {
        this._nombre = valor;
    }

    this.getTelefono = function () {
        return this._telefono;
    }

    this.setTelefono = function (valor) {
        this._telefono = valor;
    }
    this.getCodigoPostal = function () {
        return this._codigoPostal;
    }

    this.setCodigoPostal = function (valor) {
        this._codigoPostal = valor;
    }

}


