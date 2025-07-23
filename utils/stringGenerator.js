import { randomBytes } from 'crypto';

function randomString(length) {
    if (length % 2 !== 0) {
        length++;
    }

    return randomBytes(length / 2).toString('hex');
}

export const newRandomString = randomString(12);
