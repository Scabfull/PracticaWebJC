export function reiniciarIndex(array) {
    for(var i=0; i<array.length; i++)
    {
        array[i].index = i;
    }
}

export function añadirConductorArray(array, Nombre, Telefono, Codigo_Postal) {

    array.push({ Nombre: Nombre, Telefono: Telefono, Codigo_Postal: Codigo_Postal, index: array.lenght });
}

export function crearArray() {
    var array = new Array();
    return array;
}

export function confirmar() {
    var confirmar = confirm("¿Seguro que quieres modificar el vehículo?");
    return confirmar;
}