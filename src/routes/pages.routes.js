import { Router } from 'express';

const router = Router();
const title = "Biograf Luleå";

router.get('/', (req, res)=> {
    res.render('index', {
        title
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

router.get('/movie-info', (req, res)=> {
    res.render('movie-info', {
        title: `Film info | ${title}`
    });
});

router.get('/movies', (req, res)=> {
    res.render('movies', {
        title: `Filmer | ${title}`
    });
});

router.get('/restaurant', (req, res)=> {
    res.render('restaurant', {
        title: `Restaurang | ${title}`
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