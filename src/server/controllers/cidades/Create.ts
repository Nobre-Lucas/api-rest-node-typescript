import { Request, Response } from 'express';

interface ICidade {
    nome: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

    const data: ICidade = req.body;
    console.log(data);

    return res.send(`Cidade ${data.nome} criada!`);
};