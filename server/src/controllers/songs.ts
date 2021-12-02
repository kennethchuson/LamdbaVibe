import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Song {
    id: number, 
    title: string,
    notes: string,
}

const getSongs = async (req: Request, res: Response, next: NextFunction) => {
    // get songs from the db 

    return res.status(200).json({
        message: "get songs"
    });
};

const getSong = async (req: Request, res: Response, next: NextFunction) => {
    // get a song from the db 

    let id: string = req.params.id; 

    return res.status(200).json({
        message: "get a song"
    });
};

/**
 * const updateSong = async () => {};
 */

const deleteSong = async (req: Request, res: Response, next: NextFunction) => {
    // delete a song from the db 

    let id: string = req.params.id; 

    return res.status(200).json({
        message: "delete a song"
    });
};

const addSong = async (req: Request, res: Response, next: NextFunction) => {
    // add a song from the db 

    let title: string = req.body.title;
    let notes: string = req.body.notes;

    return res.status(200).json({
        message: "add a song"
    });
};

export default { getSongs, getSong, deleteSong, addSong };