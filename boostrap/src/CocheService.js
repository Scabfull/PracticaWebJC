
import * as scripts from "../public/js/demo.js";

const posts = new Map();
let nextId = 0;
addPost({ Matricula: "7854DGT", Marca: "Opel", Modelo: "Corsa", array: [
{ Nombre: "Javi", Telefono: "635247896", Codigo_Postal: "28745", index: "0" },
{ Nombre: "Carlos", Telefono: "626254788", Codigo_Postal: "28745", index: "1" }
]});
addPost({ Matricula: "4785HAD", Marca: "Honda", Modelo: "Civic", array: [
{ Nombre: "María", Telefono: "625478965", Codigo_Postal: "23658", index: "0" },
{ Nombre: "Gema", Telefono: "625478965", Codigo_Postal: "28947", index: "1" }
]});
addPost({ Matricula: "6589AFC", Marca: "Renault", Modelo: "Clio", array: [
{ Nombre: "Sergio", Telefono: "625478965", Codigo_Postal: "23569", index: "0" },
{ Nombre: "Alfonso", Telefono: "625478963", Codigo_Postal: "25417", index: "1" }
]});
addPost({ Matricula: "4785QTJ", Marca: "Chevrolet", Modelo: "Malibu", array: [
{ Nombre: "Lucia", Telefono: "654789887", Codigo_Postal: "21036", index: "0" },
{ Nombre: "Pedro", Telefono: "623589745", Codigo_Postal: "21458", index: "1" },
{ Nombre: "Luffy", Telefono: "624178965", Codigo_Postal: "25960", index: "2" }
]});
addPost({ Matricula: "0254FFK", Marca: "Ford", Modelo: "Mustang", array: [
{ Nombre: "Gonzalo", Telefono: "625987456", Codigo_Postal: "26589", index: "0" },
]});
addPost({ Matricula: "6258HGD", Marca: "Ford", Modelo: "Focus", array: [
    { Nombre: "Karen", Telefono: "625478963", Codigo_Postal: "21547", index: "0" },
    ]});

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

export function getCoches(from, to) {
    let values = [...posts.values()];
    if (from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
}