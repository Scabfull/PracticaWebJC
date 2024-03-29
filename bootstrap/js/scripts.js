
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

var garajeVehiculos = new Array();
var arrayConductores = new Array();
var id;

function recogerId(IdRecogido) {
    id = IdRecogido;
}

//Funcion para listar todos los coches y devolverlos en la estructura deseada
function listarCoches() {
    var listaCoches = new Array();
    var coche = new Array();
    var idcoche;

    for (var i = 0; i < garajeVehiculos.length; i++) {

        var cocheActual = garajeVehiculos[i];

        var matriculaActual = cocheActual.getMatricula();
        var marcaActual = cocheActual.getMarca();
        var modeloActual = cocheActual.getModelo();
        var array = cocheActual.getConductor().length;
        idcoche = i + 1;

        coche = [idcoche, matriculaActual, marcaActual, modeloActual, array];
        listaCoches.push(coche);
    }
    return listaCoches;
}

//Funcion para listar todos los conductores y devolverlos en la estructura deseada
function listarConductores(coche) {
    var listaConductores = new Array();
    var conductor = new Array();
    var idcoche;

    for (var i = 0; i < coche.getConductor().length; i++) {

        var conductorActual = coche.getConductor()[i];

        var nombreActual = conductorActual.getNombre();
        var telefonoActual = conductorActual.getTelefono();
        var codigoPostalActual = conductorActual.getCodigoPostal();
        idcoche = i + 1;

        conductor = [idcoche, nombreActual, telefonoActual, codigoPostalActual];
        listaConductores.push(conductor);
    }
    return listaConductores;
}

//Funcion para cerrar el overlay
function cerrar() {
    document.getElementById('formu').reset();
    ocultarFormulario();
    document.getElementById('Matricula').style.display = "inline";
    document.getElementById('SMatricula').style.display = "inline";
    mostrarAñadirConductor();
    arrayConductores = [];
}

//Funcion para abrir el overlay
function abrir() {
    arrayConductores = [];
    if (document.getElementById('SMatricula').style.display === "inline") {
        document.getElementById('SMatricula').style.display = "none";
    }

    mostrarFormulario();
}

//Funcion para mostrar el formulario para añadir conductor
function aOConductor() {
    mostrarConductor();
    ocultarAñadirConductor();
    ocultarBotonCerrar();
}

//Funcion para cerrar el formulario para añadir conductor
function cerrarConductor() {
    ocultarConductor();
    mostrarAñadirConductor();
    mostrarBotonCerrar();
    vaciarFormConductor();
    if (document.getElementById('oCoche').style.display === "none") {
        cerrar();
        mostrarCoche();
    }

}

//Boton para añadir los conductores
function añadirConductor() {
    var nombre = document.getElementById("Nombre");
    var telefono = document.getElementById("Telefono");
    var codigo_Postal = document.getElementById("Codigo_Postal");
    //En el caso de que sea para añadir conductores a un coche ya creado
    if (document.getElementById('oCoche').style.display === "none") {
        var coche = garajeVehiculos[buscarCoche(document.getElementById("Matricula").value)];
        var conductor = coche.getConductor()[id - 1];
        conductor.setNombre(nombre.value);
        conductor.setTelefono(telefono.value);
        conductor.setCodigoPostal(codigo_Postal.value);
        $('#example').DataTable().clear().rows.add(listarCoches()).draw();
    }
    //En el caso que sea para añadir conductores mientras creas un coche
    else {
        conductor = new Conductor();
        conductor.constructorConductor(nombre.value, telefono.value, codigo_Postal.value);
        arrayConductores.push(conductor);
    }
    cerrarConductor();
}

//
//Funciones para mostrar y ocultar elementos
//
function mostrarFormulario() {
    document.getElementById('overlay').style.display = "inline";
    document.getElementById('overlay').style.visibility = "visible";

}

function mostrarCoche() {
    document.getElementById('oCoche').style.display = "inline";
    document.getElementById('oCoche').style.visibility = "visible";

}

function mostrarBotonCerrar() {
    document.getElementById('BCerrar').style.display = "flex";
    document.getElementById('BCerrar').style.visibility = "visible";

}

function mostrarConductor() {
    document.getElementById('oConductor').style.display = "flex";
    document.getElementById('oConductor').style.visibility = "visible";

}

function mostrarAñadirConductor() {
    document.getElementById('BConductor').style.visibility = "visible";
}

function ocultarCoche() {
    document.getElementById('oCoche').style.display = "none";
    document.getElementById('oCoche').style.visibility = "hidden";

}

function ocultarBotonCerrar() {
    document.getElementById('BCerrar').style.display = "none";
    document.getElementById('BCerrar').style.visibility = "hidden";

}

function ocultarConductor() {
    document.getElementById('oConductor').style.display = "none";
    document.getElementById('oConductor').style.visibility = "hidden";
}

function ocultarAñadirConductor() {
    document.getElementById('BConductor').style.visibility = "hidden";
}

function ocultarFormulario() {

    document.getElementById('overlay').style.display = "none";
    document.getElementById('overlay').style.visibility = "hidden";

}

function vaciarFormConductor() {
    document.getElementById('Nombre').value = "";
    document.getElementById('Telefono').value = "";
    document.getElementById('Codigo_Postal').value = "";
}

//Reloj y fecha
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
    var _array = new Array();

    this.constructorCoche = function (matricula, marca, modelo, conductores) {
        this.setMatricula(matricula);
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setConductor(conductores);
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
        return this._array;
    }

    this.setConductor = function (valor) {
        this._array = valor;
    }

}

/*----------------------------------------------------------------
------------------------CONSTRUCTOR CONDUCTORES-------------------
----------------------------------------------------------------*/

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

//
//Funcion submit del formulario
//
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
    if (document.getElementById("Matricula").style.display === "inline") {
        coche = new Coche();
        coche.constructorCoche(matricula.value, marca.value, modelo.value, arrayConductores);
        garajeVehiculos.push(coche);
        document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
        alert("Coche nuevo añadido")
        $('#example').DataTable().clear().rows.add(listarCoches()).draw();
        
    }
    else {
        var confirmar = confirm("¿Seguro que quieres modificar el vehículo?");
        if (confirmar === true) {
            var cocheEncontrado = garajeVehiculos[buscarCoche(matricula)];
            cocheEncontrado.setMarca(marca.value);
            cocheEncontrado.setModelo(modelo.value);
            for(var i=0; i<arrayConductores.length; i++){
                cocheEncontrado.getConductor().push(arrayConductores[i]);
            }
            $('#example').DataTable().clear().rows.add(listarCoches()).draw();
            alert("Vehículo modificado");

        } else {
            alert("El vehículo no ha sido modificado");
        }
    }
    arrayConductores = [];
    mostrarAñadirConductor();
    cerrar();
});

//
//Funcion para cargar datos en los formularios
//
function AsignarCoche(coche) {
    document.getElementById("SMatricula").textContent = coche.getMatricula();
    document.getElementById("Matricula").style.display = "none";
    document.getElementById("Matricula").value = coche.getMatricula();
    document.getElementById("Marca").value = coche.getMarca();
    document.getElementById("Modelo").value = coche.getModelo();
}

function AsignarConductor(coche, idConductor) {
    document.getElementById("Nombre").value = coche.getConductor()[idConductor - 1].getNombre();
    document.getElementById("Telefono").value = coche.getConductor()[idConductor - 1].getTelefono();
    document.getElementById("Codigo_Postal").value = coche.getConductor()[idConductor - 1].getCodigoPostal();

}

//Funcion para destruir el vehiculo
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

//Funcion para destruir el conductor
function eliminarConductor(id, coche) {
    var i = id - 1;
    conductoresBuenos = coche.getConductor().splice(i, 1);
}

//Funcion para buscar un coche a traves de la matricula
function buscarCoche(matricula) {

    for (var i = 0; i < garajeVehiculos.length; i++) {

        var cocheActual = garajeVehiculos[i];
        var matriculaActual = cocheActual.getMatricula();


        if (matricula == matriculaActual) {
            return i;
        }
    }

}
