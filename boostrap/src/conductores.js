import express from 'express';

import * as boardService from './CocheService.js';

import { reiniciarIndex } from '../public/js/demo.js';

const conductores= express.Router({ mergeParams: true });


conductores.get('/:index/delete', (req, res) => {
  boardService.deleteConductor(req.id, req.params.index);
  res.render('deleted_conductor');
});

conductores.post('/:index/save', (req, res) => {

    let { Nombre, Telefono, Codigo_Postal } = req.body;
    let index = req.params.index;
    boardService.editCoche(req.id, index, Nombre, Telefono, Codigo_Postal);

    res.render('edited_conductor');
});

conductores.post('/new', (req, res) => {

    let { Nombre, Telefono, Codigo_Postal } = req.body;

    boardService.addConductor(req.id, Nombre, Telefono, Codigo_Postal);
    reiniciarIndex(boardService.getPost(req.id).array);
    res.render('saved_conductor');
});

conductores.get('/form', (req, res) => {
    let id = req.id;
    res.render('form_conductor', { id });
    
});

conductores.get('/:index/edit', (req, res) => {
    let id = req.id;
    let conductor = boardService.getConductor(id, req.params.index);
    res.render('edit_form_conductor', { id, conductor });
    
});

export default conductores;