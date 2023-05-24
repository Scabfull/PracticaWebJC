$(document).ready(function () {
    var tabla = $('#example').DataTable({
        "language": {
            "emptyTable": "No hay coches registrados en el garaje.",
            "info": "",
            "infoEmpty": "",
            "infoFiltered": "",
            "search": "Buscar: ",
            "paginate": {
                "first": "Primera",
                "last": "Última",
                "next": "Siguiente",
                "previous": "Anterior"
            },
        },
        data: listarCoches(),
        columns: [
            { title: 'ID' },
            { title: 'Matricula' },
            { title: 'Marca', class: 'editable text' },
            { title: 'Modelo', class: 'editable text' },
            { title: 'Conductores', class: 'editable text' },
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            {
                data: "ID",
                render: function (data, type, row) {
                    return "<button id='editar'>Editar</button>";
                }
            },
            {
                data: "ID",
                render: function (data, type, row) {
                    return "<button id='eliminar'>Eliminar</button>";
                }
            },
        ],
        "lengthChange": false
    });


    var table = $('#example').DataTable();
    //Boton eliminar de la tabla
    $('#example tbody').on('click', '#eliminar', function () {
        var confirmar = confirm("¿Seguro que quieres retirar el vehículo?");
        if (confirmar === true) {
            matriculaBuena = table.cell($(this).parents('tr'), 1).data();
            alert(matriculaBuena);
            destruirVehiculo(matriculaBuena);
            table.row($(this).parents('tr')).remove().clear().rows.add(listarCoches()).draw();

            alert("Vehículo retirado");

        } else {
            alert("El vehículo no ha sido retirado");
        }
    });
    //Boton editar de la tabla
    $('#example tbody').on('click', '#editar', function () {
        matriculaBuena = table.cell($(this).parents('tr'), 1).data();
        coche = garajeVehiculos[buscarCoche(matriculaBuena)];
        AsignarCoche(coche);
        mostrarFormulario();

    });

    // Esto es para los child, para abrir y cerrar la info extra
    $('#example tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);
        var index = row.index();

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }

        else {
            var cocheActual = garajeVehiculos[buscarCoche(table.cell($(this).parents('tr'), 1).data())];
            // Open this row
            row.child(
                '<table class="child_table" id = "child_details' + index + '" cellpadding="5" cellspacing="0" border="0" >' +
                '<thead><tr><th></th><th>Nombre</th><th>Telefono</th><th>CodigoPostal</th><th></th><th></th></tr></thead><tbody>' +
                '</tbody></table>').show();

            var childTable = $('#child_details' + index).DataTable({
                "searching": false,
                "paginate": false,
                "language": {
                    "emptyTable": "No hay conductores registrados.",
                    "info": "",
                    "infoEmpty": "",
                    "infoFiltered": "",
                    "paginate": {
                        "first": "Primera",
                        "last": "Última",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    },
                },
                data: listarConductores(cocheActual),
                columns: [
                    { title: 'ID' },
                    { title: 'Nombre' },
                    { title: 'Telefono' },
                    { title: 'Codigo Postal' },
                    {
                        data: "ID",
                        render: function (data, type, row) {
                            return "<button id='editarConductor'>Editar</button>";
                        }
                    },
                    {
                        data: "ID",
                        render: function (data, type, row) {
                            return "<button id='eliminarConductor'>Eliminar</button>";
                        }
                    },
                ],
                "lengthChange": false,
            });
            tr.addClass('shown');
            //Boton eliminar de la tabla hijo
            $('.child_table tbody').on('click', '#eliminarConductor', function () {
                var confirmar = confirm("¿Seguro que quieres eliminar el conductor?");
                if (confirmar === true) {
                    idBueno = childTable.cell($(this).parents('tr'), 0).data();
                    eliminarConductor(idBueno, cocheActual);
                    childTable.row($(this).parents('tr')).remove().clear().rows.add(listarConductores(cocheActual)).draw();
                    $('#example').DataTable().clear().rows.add(listarCoches()).draw();

                    alert("Conductor eliminado");

                } else {
                    alert("El conductor no ha sido eliminado");
                }
            });
            //Boton editar de la tabla hijo
            $('.child_table tbody').on('click', '#editarConductor', function () {
                idBueno = childTable.cell($(this).parents('tr'), 0).data();
                AsignarCoche(cocheActual);
                AsignarConductor(cocheActual, idBueno);
                mostrarFormulario();
                mostrarConductor();
                recogerId(idBueno);
                ocultarAñadirConductor();
                ocultarBotonCerrar();
                ocultarCoche();


            });
        }
    });
});

