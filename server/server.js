const express = require('express');
const path = require('path');
const app = express();
const serverPort = 3000;
const publicPath = 'dist';
app.use(express.static(path.resolve(publicPath)));
app.get('*', (req, res) => res.sendFile(path.resolve(publicPath, 'index.html')));
app.listen(serverPort, () => console.log(`server start on port ${serverPort}!`));