import app from './app.mjs';

(async () => {
    await app.configure();
    await app.initializeRoutes();
})();

app.startServer((port) => {
    console.log(`Listening on ${port}.`);
});