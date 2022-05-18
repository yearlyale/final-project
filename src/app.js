/**
 * 
 * @author {
 *      Garcia Mendoza Cesar Alejandro
 *      Lucero Martinez Bryan de Jesus
 *      Martinez Ortiz Danyaell
 *      Miranda Ayala Daniel
 *      Rios Cortes Leonel
 *      Rios Pacheco Luis Manuel
 * }
 * @description Final-Project
 */

const express = require('express');
const firstAssignment = require('./first-assignment/first-assignment');
const secondAssignment = require('./second-assignment/second-assignment');
const thirdAssignment = require('./third-assignment/third-assignment');
const fourthAssignment = require('./fourth-assignment/fourth-assignment');
const fifthAssignment = require('./fifth-assignment/fifth-assignment');
const sixthAssignmentListener = require('./sixth-assignment/app-listener/sixth-assignment-listener');
const sixthAssignmentReader = require('./sixth-assignment/app-reader/sixth-assignment-reader');
const { getFiles, createFileRes, deleteFileRes, formatSystemRes } = require('./seventh-assignment/seventh-assignment');
const app = express();

app.listen(3000, () => console.log('Final proyect | Operating Systems'));

app.get('/first-assignment', (req, res) => firstAssignment());

app.get('/second-assignment', (req, res) => secondAssignment());

app.get('/third-assignment', (req, res) => thirdAssignment());

app.get('/fourth-assignment', (req, res) => fourthAssignment());

app.get('/fifth-assignment', (req, res) => fifthAssignment());

app.get('/sixth-assignment/listener', (req, res) => sixthAssignmentListener(req, res));
app.get('/sixth-assignment/reader', (req, res) => sixthAssignmentReader(req, res));

app.get('/seventh-assignment/getFiles', (req, res) => getFiles(req, res));
app.get('/seventh-assignment/createFile', (req, res) => createFileRes(req, res));
app.get('/seventh-assignment/deleteFile', (req, res) => deleteFileRes(req, res));
app.get('/seventh-assignment/formatSystem', (req, res) => formatSystemRes(req, res));