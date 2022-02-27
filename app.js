const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 3000;

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use('/css',  express.static(path.resolve(__dirname, 'dist')));
app.use('/js',  express.static(path.resolve(__dirname, 'app/js')));
app.use('/img',  express.static(path.resolve(__dirname, 'app/img')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Portofolio Web | Running at http://127.0.0.1:${PORT}`);
});