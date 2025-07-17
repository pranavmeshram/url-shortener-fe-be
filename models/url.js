import { Schema, model } from 'mongoose';

const urlSchema = new Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    longUrl: {
        type: String,
        required: true,
    },
});

export const Url = model('urls', urlSchema);
