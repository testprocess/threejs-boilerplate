import express from 'express';

const app = express();

app.disable('x-powered-by');

app.use('/', express.static('src'));
app.use('/dist', express.static('dist'));

app.listen(7000, err => {
    console.log(`[ + ] The server is running.`);
});