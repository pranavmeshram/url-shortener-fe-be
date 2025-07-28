import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { createNewShortUrl, getLongUrl } from './controllers/url.js';

const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));

// Db connection
mongoose
    .connect('mongodb://127.0.0.1:27017/wdmShortUrl')
    .then(() => console.log('\nMongoDb connected\n'))
    .catch((err) => console.log('MongoDb Error', err));

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/', createNewShortUrl);

app.get('/:shortId', getLongUrl);

app.listen(port, () => {
    console.log(`url-shortener app listening on port ${port}`);
});
