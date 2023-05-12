function format(coche) {
    // Con esto se le pasa a la tabla child los parametros que queremos usar (nombre, telefono, lo que sea) para que los muestre (los coge de la data de la datatable)
    return (
        '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Nombre:</td>' +
        '<td id="camponombre" contenteditable="false">' +
        coche.getConductor().getNombre() +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Teléfono:</td>' +
        '<td>' +
        coche.getConductor().getTelefono() +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Código postal:</td>' +
        '<td>' +
        coche.getConductor().getCodigoPostal() +
        '</td>' +
        '</tr>' +
        '</table>'
    );
}


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
            { title: 'Id' },
            { title: 'Matricula' },
            { title: 'Marca', class: 'editable text' },
            { title: 'Modelo', class: 'editable text' },
            { title: 'Nombre', class: 'editable text' },
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
        "lengthChange": false,
       /* "fnRowCallback": function (nRow, aData, iDisplayIndex) {
            $("td:first", nRow).html(iDisplayIndex + 1);
            return nRow;
        },
*/
    });


    var table = $('#example').DataTable();
    $('#example tbody').on('click', '#eliminar', function () {
        var confirmar = confirm("¿Seguro que quieres retirar el vehículo?");
        if (confirmar === true) {
            matriculaBuena = table.cell($(this).parents('tr'), 1).data();
            destruirVehiculo(matriculaBuena);
            table.row($(this).parents('tr')).remove().draw();

            alert("Vehículo retirado");

        } else {
            alert("El vehículo no ha sido retirado");
        }


    });

    $('#example tbody').on( 'click', '#editar', function () {
        matriculaBuena = table.cell($(this).parents('tr'),1).data();
        coche = garajeVehiculos[buscarCoche(matriculaBuena)];
        Asignar(coche);
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('overlay').style.visibility = 'visible';
        
            
    } );

    
    
    // Funcion para añadir una nueva fila, donde COUNTER son los datos que hay.
   /* $('#cocheNuevo').on('click', function () {
        tabla.row.add(['.1', '.2', '.3', '.4', '.5']).draw(false);
    }); */
    /////////////////////////////////////////////////////

  /*  $('#example').on('click', 'tbody td .edit', function (e) {
        fnResetControls();
        var clickedRow = $($(this).closest('td')).closest('tr');
        $(clickedRow).find('td').each(function () {
            // Al hacer click en el boton convierte los campos en editables 
            if ($(this).hasClass('editable')) {
                if ($(this).hasClass('text')) {
                    var html = fnCreateTextBox($(this).html(), 'name');
                    $(this).html($(html))
                }
            }
        });


        $('#example tbody tr td .update').removeClass('update').addClass('edit').html('Editar');
        $(clickedRow).find('td .edit').removeClass('edit').addClass('update').html('Guardar');

    });

    function fnCreateTextBox(value, fieldprop) {
        return '<input data-field="' + fieldprop + '" type="text" value="' + value + '" ></input>';
    }

    $('#example').on('click', 'tbody td .cancel', function (e) {
        fnResetControls();
        $('#example tbody tr td .update').removeClass('update').addClass('edit').html('Editar');
        $('#example tbody tr td .cancel').removeClass('cancel').addClass('delete').html('Delete');
    });

    $('#example').on('click', 'tbody td .update', function (e) {

        var openedTextBox = $('#example').find('input');
        $.each(openedTextBox, function (k, $cell) {
            fnUpdateDataTableValue($cell, $cell.value);
            $(openedTextBox[k]).closest('td').html($cell.value);

        })

        $('#example tbody tr td .update').removeClass('update').addClass('edit').html('Editar');
    });

    function fnUpdateDataTableValue($inputCell, value) {
        var rowIndex = tabla.row($($inputCell).closest('tr')).index();
        var fieldName = $($inputCell).attr('data-field');
        tabla.rows().data()[rowIndex][fieldName] = value;

    }


    function fnResetControls() {
        var openedTextBox = $('#example').find('input');
        $.each(openedTextBox, function (k, $cell) {
            $(openedTextBox[k]).closest('td').html($cell.value);
        })
    }
*/
   
    // Esto es para los child, para abrir y cerrar la info extra

    $('#example tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            var cocheActual = garajeVehiculos[buscarCoche(table.cell($(this).parents('tr'), 1).data())];
            row.child(format(cocheActual)).show();
            tr.addClass('shown');
        }
    });




});

