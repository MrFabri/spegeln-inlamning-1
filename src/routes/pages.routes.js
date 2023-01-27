import { Router } from 'express';
import { loadMovies } from '../helpers/movies.js';
import { marked } from 'marked';

const router = Router();
const title = "Biograf Luleå";


router.get('/', async (req, res)=> {
    const movies = await loadMovies();
    res.render('index', {
        title,
        movies,
        path: req.url,
        markdown: md => marked.parse(md)
    });
});

router.get('/about-us', (req, res)=> {
    res.render('about-us', {
        title: `Om oss | ${title}`,
        path: req.url
    });
});

router.get('/events', (req, res)=> {
    res.render('events', {
        title: `Events | ${title}`,
        path: req.url
    });
});

router.get('/restaurant', async (req, res)  => {
    const movies = await loadMovies();
    res.render('restaurant', {
        title: `Restaurang | ${title}`,
        movies,
        path: req.url
    });
});

router.get('/salons', (req, res)=> {
    res.render('salons', {
        title: `Salons | ${title}`,
        path: req.url
    });
});

router.get('/salon/a', (req, res)=> {
    res.render('salons', {
        title: `Salon A | ${title}`,
        path: req.url
    });
});

router.get('/salon/b', (req, res)=> {
    res.render('salons', {
        title: `Salon B | ${title}`,
        path: req.url
    });
});

router.get('/under-construction', (req, res)=> {
    res.render('under-construction', {
        title: `Under construction | ${title}`,
        path: req.url
    });
});

export default router;