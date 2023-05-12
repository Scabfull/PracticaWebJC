
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

function buscarCoche(matricula) {

    for (var i = 0; i < garajeVehiculos.length; i++) {

        var cocheActual = garajeVehiculos[i];
        var matriculaActual = cocheActual.getMatricula();


        if (matricula == matriculaActual) {
            return cocheActual;
        }
    }

}

function cerrar() {
    document.getElementById('formu').reset();
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('overlay').style.visibility = 'hidden';
    document.getElementById('Matricula').style.display = "inline";
    document.getElementById('SMatricula').style.display = "inline";
}

function abrir() {
    if (document.getElementById('SMatricula').style.display === "inline") {
        document.getElementById('SMatricula').style.display = "none";
    }
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('overlay').style.visibility = 'visible';

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
let loginForm = document.getElementById("formu");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.getElementById('Matricula').style.display === "inline") {
        var matricula = document.getElementById("Matricula");
    }
    else {
        document.getElementById('Matricula').required = false;
        var matricula = document.getElementById("SMatricula").textContent;
    }
    var marca = document.getElementById("Marca");
    var modelo = document.getElementById("Modelo");
    var nombre = document.getElementById("Nombre");
    var telefono = document.getElementById("Telefono");
    var codigo_Postal = document.getElementById("Codigo_Postal");
    if (document.getElementById("Matricula").style.display === "inline") {

        coche = new Coche();
        conductor = new Conductor();
        conductor.constructorConductor(nombre.value, telefono.value, codigo_Postal.value);
        coche.constructorCoche(matricula.value, marca.value, modelo.value, conductor);
        garajeVehiculos.push(coche);
        document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
        alert("Coche nuevo añadido")
        $('#example').DataTable().clear().rows.add(listarCoches()).draw();
    }
    else {
        var confirmar = confirm("¿Seguro que quieres modificar el vehículo?");
        if (confirmar === true) {
            garajeVehiculos[buscarCoche(matricula)].setMarca(marca.value);
            garajeVehiculos[buscarCoche(matricula)].setModelo(modelo.value);
            garajeVehiculos[buscarCoche(matricula)].getConductor().setNombre(nombre.value);
            garajeVehiculos[buscarCoche(matricula)].getConductor().setTelefono(telefono.value);
            garajeVehiculos[buscarCoche(matricula)].getConductor().setCodigoPostal(codigo_Postal.value);
            $('#example').DataTable().clear().rows.add(listarCoches()).draw();
            alert("Vehículo modificado");

        } else {
            alert("El vehículo no ha sido modificado");
        }
    }
    cerrar();
});

function Asignar(coche) {
    document.getElementById("SMatricula").textContent = coche.getMatricula();
    document.getElementById("Matricula").style.display = "none";
    document.getElementById("Matricula").value = coche.getMatricula();
    document.getElementById("Marca").value = coche.getMarca();
    document.getElementById("Modelo").value = coche.getModelo();
    document.getElementById("Nombre").value = coche.getConductor().getNombre();
    document.getElementById("Telefono").value = coche.getConductor().getTelefono();
    document.getElementById("Codigo_Postal").value = coche.getConductor().getCodigoPostal();

}

// funcion para destruir el vehiculo

function destruirVehiculo(matricula) {

    for (var i = 0; i < garajeVehiculos.length; i++) {

        var cocheActual = garajeVehiculos[i];
        var matriculaActual = cocheActual.getMatricula();


        if (matricula == matriculaActual) {
            garajeVehiculos.splice(i, 1);
            document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;

        }
    }

}

function buscarCoche(matricula) {

    for (var i = 0; i < garajeVehiculos.length; i++) {

        var cocheActual = garajeVehiculos[i];
        var matriculaActual = cocheActual.getMatricula();


        if (matricula == matriculaActual) {
            return i;
        }
    }

}

