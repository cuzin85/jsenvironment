import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import wdm from 'webpack-dev-middleware';
import config from '../webpack.config.dev.js';

const app = express();
const port = 3010;
const compiler = webpack(config);

app.use(wdm(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port, "Chrome");
    }
});
