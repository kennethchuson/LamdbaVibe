import { Request, Response, NextFunction, response } from 'express';
import { request } from 'http';
const router = require('express').Router();

router.use('/songs', require('./songs'));

interface ErrorResponse extends Error {
  status?: number;
}

router.use((req: Request, res: Response, next: NextFunction) => {
    const err = new Error('Not found') as ErrorResponse;
    err.status = 404;
    next(err);
});

module.exports = router;
