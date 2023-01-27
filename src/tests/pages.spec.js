import request from 'supertest';
import app from '../server.js';

describe('GET /', () => {
    test('Home page shows list of movies', async () => {
        const response = await request(app).get('/').expect(200);       
        expect(response.headers['content-type']).toEqual(expect.stringContaining("text/html"));
        expect(response.text.includes('Shawshank')).toBeTruthy();
    });
});

describe('GET /movie/2', () => {
    test('Encanto page returns Encanto info', async () => {
        const response = await request(app).get('/movie/2').expect(200);                              
        expect(response.headers['content-type']).toEqual(expect.stringContaining("text/html"));
        expect(response.text.includes('Encanto')).toBeTruthy();
        expect(response.text.includes('Shawshank')).toBeFalsy();
    });
});

describe('GET /movie/:id not existing id', () => {
    test('Should respond with status 404 and content-type text/html', async () => {
        const response = await request(app).get('/movie/lol').expect(404);
        expect(response.headers['content-type']).toEqual(expect.stringContaining("text/html"));
    });
});