import express from 'express';
import { resolve } from 'path';
import pageRoutes from './routes/pages.routes.js';
import movieRoutes from './routes/movies.routes.js';
import 'ejs'

const app = express();

app.set('port', 5080);
app.set('view engine', 'ejs');
app.set('views', resolve('src/views'));
app.use('/static', express.static(resolve('src/static')));

app.use('/', pageRoutes);
app.use('/', movieRoutes);
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Sidan hittas inte | Biograf Luleå',
        path: req.url
    });
});

app.listen(app.get('port'), ()=> {
    console.log(`Server listening on port ${app.get('port')}`);
});