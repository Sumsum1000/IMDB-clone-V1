import express from 'express';
import { getFeatured } from './movies.services.mjs';
//import { getFeatured } from './movies.services.mjs';
import {getMovies} from './movies.services.mjs';

export const MoviesRouter = express.Router();

MoviesRouter.get('/', async (req, res) => {
    res.send(await getMovies());
});

MoviesRouter.get('/:id', async (req, res) => {
    res.send(await getMovies(req.params.id));
});


