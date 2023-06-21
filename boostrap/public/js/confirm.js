async function confirmar(id){
    var confirmar = confirm("¿Seguro que quieres eliminar el vehículo?");

    if (confirmar == true) {
        window.location.href='/post/'+id+'/delete';
    } else {
        alert("El vehículo no ha sido eliminado");
    }
    
}

async function confirmarConductor(id, index){
    var confirmar = confirm("¿Seguro que quieres eliminar el conductor?");

    if (confirmar == true) {
        window.location.href='/post/'+ id +'/delete';
        window.location.href='/post/'+ id + '/conductores/' + index + '/delete';
    } else {
        alert("El conductor no ha sido eliminado");
    }
    
}

