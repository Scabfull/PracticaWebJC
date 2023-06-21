const NUM_RESULTS = 5;

let loadMoreRequests = 0;

async function cargarMas(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/coches?from=${from}&to=${to}`);

    const newCoche = await response.text();

    const cocheDiv = document.getElementById("coches");

    cocheDiv.innerHTML += newCoche;

    loadMoreRequests++;
}