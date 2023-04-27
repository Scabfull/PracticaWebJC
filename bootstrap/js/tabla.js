$(document).ready(function () {
    var tabla = $('#example').DataTable({
        "language": {
            "emptyTable": "No hay coches registrados en el garaje."
        },
        data: listarCoches(),
        columns: [
            { title: 'Id' },
            { title: 'Matricula' },
            { title: 'Marca' },
            { title: 'Modelo' },
            { title: 'Nombre.' },
            {
                data: "ID",
                render: function (data, type, row) {
                    return "<button class='edit'>Editar</button>";
                }
            },
            {
                data: "ID",
                render: function (data, type, row) {
                    return "<button id='eliminar'>Eliminar</button>";
                }
            },
        ],
        "lengthChange": false,

    });
    var table = $('#example').DataTable();
    $('#example tbody').on( 'click', '#eliminar', function () {
        var confirmar = confirm("¿Seguro que quieres retirar el vehículo?");
        if (confirmar === true) {
            matriculaBuena = table.cell($(this).parents('tr'),1).data();
            destruirVehiculo(matriculaBuena);
            table.row($(this).parents('tr')).remove().draw();
            
            alert ("Vehículo retirado");
            
        } else {
           alert ("El vehículo no ha sido retirado");
        }
        
            
    } );

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
    
    
    
});

