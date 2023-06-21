
import * as scripts from "../public/js/demo.js";
const posts = new Map();
let nextId = 0;
addPost({ Matricula: "7854DGT", Marca: "Opel", Modelo: "Corsa", array: [{ Nombre: "Javi", Telefono: "Caca", Codigo_Postal: "Esop", index: "0" },
{ Nombre: "Javi", Telefono: "Opel", Codigo_Postal: "Corsa", index: "1" }]});
addPost({ Matricula: "4785HAD", Marca: "Honda", Modelo: "Civic", array: [{ Nombre: "Carlis", Telefono: "Opel", Codigo_Postal: "Corsa", index: "0" },
{ Nombre: "Javi", Telefono: "Opel", Codigo_Postal: "Corsa", index: "1" }]});

export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    posts.set(post.id, post);
}

export function deletePost(id){
    posts.delete(id);
}

export function getPosts(){
    return [...posts.values()];
}

export function getConductores(id){
    return [...posts.get(id).array.values()];
}

export function getPost(id){
    return posts.get(id);
}

export function getConductor(id, index){
    return posts.get(id).array[index];
}

export function editPost(id, Matricula, Marca, Modelo){
    posts.get(id).Matricula = Matricula;
    posts.get(id).Marca = Marca;
    posts.get(id).Modelo = Modelo;
}

export function deleteConductor(id, index){
    getPost(id).array.splice(index, 1);
    scripts.reiniciarIndex(getPost(id).array);
    
}

export function editCoche(id, index, Nombre, Telefono, Codigo_Postal){
    getPost(id).array[index].Nombre = Nombre;
    getPost(id).array[index].Telefono = Telefono;
    getPost(id).array[index].Codigo_Postal = Codigo_Postal;

}

export function addConductor(id, Nombre, Telefono, Codigo_Postal){
    getPost(id).array.push({ Nombre: Nombre, Telefono: Telefono, Codigo_Postal: Codigo_Postal, index: getPost(id).array.lenght });

}

export function numeroCoches(){
    return getPosts.length;
}