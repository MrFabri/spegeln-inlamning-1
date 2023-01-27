import { Router } from 'express';
import { loadMovies, loadMovie } from '../helpers/movies.js';

const router = Router();
const title = "Biograf Luleå";

router.get('/movie/:id', async (req, res)=> {
    const movie = await loadMovie(req.params.id);

    if (movie) {
        res.render('movie', {
            title: `Film info | ${title}`,
            movie,
            path: req.url
        });
    } else {
        res.status(404).render('404', {
            title: `Page not found | ${title}`,
            path: req.url
        });
    }
});

router.get('/movies', async (req, res)=> {
    const movies = await loadMovies();
    res.render('movies', {
        title: `Filmer | ${title}`,
        movies,
        path: req.url
    });
});

export default router;