import app from './app.mjs';

app.startServer((port) => {
    console.log(`Listening on ${port}.`);
});