const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
//const config = require('./config');
// const expressForceHttps = require('./express-force-https');

module.exports = (() => {
    const app = express();

    // app.use(expressForceHttps);
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Priority serve any static files.
    app.use(express.static(path.resolve(__dirname, '../build')));
    // app.use('/static',express.static(path.join(__dirname, '../build')));

    // All remaining requests return the React app, so it can handle routing.
    app.get('*', function (request, response) {
        response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
    });

    const port = +(process.env.REACT_APP_API_END_POINT ?? 8080);
    app.listen(port, () => console.log(`Listening on :${port}`));
})();
