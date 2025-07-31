import { Url } from '../models/url.js';
import { newRandomString } from '../utils/stringGenerator.js';

export const createNewShortUrl = async (req, res) => {
    const longUrl = req.body.longUrl;
    if (!longUrl) throw new Error('Url not found!');
    try {
        const payload = {
            shortId: newRandomString,
            longUrl: longUrl,
        };
        await Url.create(payload);
        res.render('index.ejs', { shortId: newRandomString });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong !',
            result: error.message,
        });
    }
};

export const getLongUrl = async (req, res) => {
    try {
        const result = await Url.findOne({ shortId: req.params.shortId });
        if (!result) throw new Error('Url not found!');
        res.redirect(result.longUrl);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong !',
            result: error.message,
        });
    }
};
