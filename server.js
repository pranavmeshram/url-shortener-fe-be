import express from 'express';

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`url-shortener app listening on port ${port}`);
});
