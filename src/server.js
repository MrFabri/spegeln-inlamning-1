import express from 'express';
import { resolve } from 'path';
import pageRoutes from './routes/pages.routes.js';
import 'ejs';

const app = express();

app.set('port', 8080);
app.set('view engine', 'ejs');
app.set('views', resolve('src/views'));
app.use('/static', express.static(resolve('src/static')));

app.use('/', pageRoutes)


app.listen(app.get('port'), ()=> {
    console.log(`Server listening on port ${app.get('port')}`);
});