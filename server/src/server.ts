import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.send('Hello world');
});

app.listen(3333);
