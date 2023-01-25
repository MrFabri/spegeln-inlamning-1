import { Router } from 'express';
import { loadMovies, loadMovie } from '../helpers/movies.js';

const router = Router();
const title = "Biograf Luleå";

router.get('/', async (req, res)=> {
    const movies = await loadMovies();
    res.render('index', {
        title,
        movies
    });
});

router.get('/movie/:id', async (req, res)=> {
    const movie = await loadMovie(req.params.id);
    res.render('movie', {
        title: `Film info | ${title}`,
        movie
    });
});

router.get('/movies', async (req, res)=> {
    const movies = await loadMovies();
    res.render('movies', {
        title: `Filmer | ${title}`,
        movies
    });
});

router.get('/about-us', (req, res)=> {
    res.render('about-us', {
        title: `Om oss | ${title}`
    });
});

router.get('/booking', (req, res)=> {
    res.render('booking', {
        title: `Boka | ${title}`
    });
});

router.get('/events', (req, res)=> {
    res.render('events', {
        title: `Events | ${title}`
    });
});

router.get('/restaurant', async (req, res)  => {
    const movies = await loadMovies();
    res.render('restaurant', {
        title: `Restaurang | ${title}`,
        movies
    });
});

router.get('/salonA', (req, res)=> {
    res.render('salonA', {
        title: `Salon A | ${title}`
    });
});

router.get('/salonB', (req, res)=> {
    res.render('salonB', {
        title: `Salon B | ${title}`
    });
});

router.get('/salons', (req, res)=> {
    res.render('salons', {
        title: `Salons | ${title}`
    });
});

router.get('/under-construction', (req, res)=> {
    res.render('under-construction', {
        title: `Under construction | ${title}`
    });
});

export default router;