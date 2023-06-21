async function numCoches(){



    const response = await fetch(`/numCoches`);

    const newCoche = await response.text();

    document.getElementById("cochesTotales").innerHTML = newCoche;

    
    ;
}

numCoches();
