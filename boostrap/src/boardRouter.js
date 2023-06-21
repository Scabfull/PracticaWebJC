import express from 'express';
import * as scripts from "../public/js/demo.js";
import * as boardService from './CocheService.js';
import conductores from './conductores.js';
var arrayConductores = new Array();
const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        posts: boardService.getPosts()
    });
});

router.post('/post/new', (req, res) => {

    let { Matricula, Marca, Modelo } = req.body;
    var array = [...arrayConductores];
    scripts.reiniciarIndex(array);
    arrayConductores = [];
    boardService.addPost({ Matricula, Marca, Modelo, array });

    res.render('saved_post');
});

router.get('/post/:id', (req, res) => {

    let post = boardService.getPost(req.params.id);
    res.render('show_post', {
        conductores: boardService.getConductores(req.params.id),
        post
    });
});

router.get('/post/:id/delete', (req, res) => {
    boardService.deletePost(req.params.id);
    res.render('deleted_post');
});

router.get('/post/:id/edit', (req, res) => {
    let post = boardService.getPost(req.params.id);
    res.render('edit_form', { post });
});


router.post('/post/:id/save', (req, res) => {

    let { Matricula, Marca, Modelo } = req.body;
    let id = req.params.id;
    boardService.editPost(id, Matricula, Marca, Modelo);

    res.render('edited_post');
});

router.get('/form', (req, res) => {
    arrayConductores = [];
    res.render('form_coche');
});

router.get('/form_subelemento', (req, res) => {
    res.render('form_conductor_coche');
});

router.post('/formConductor', (req, res) => {
    let { Nombre, Telefono, Codigo_Postal } = req.body;
    scripts.añadirConductorArray(arrayConductores, Nombre, Telefono, Codigo_Postal)
    res.render('form_coche');
});

router.use('/post/:id/conductores', function (req, res, next) {
    req.id = req.params.id;
    next()
}, conductores);

router.get('/cancelarConductor', (req, res) => {
    res.render('form_coche');
});

export default router;
