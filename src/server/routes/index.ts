import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Olá, dev!');
});

router.post('/test-post', (req, res) => {
    console.log(req.query.teste);
    return res.status(StatusCodes.OK).json(req.body);
});


export { router };