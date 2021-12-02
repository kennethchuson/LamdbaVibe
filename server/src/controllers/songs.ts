import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Song {
    id: number, 
    title: string,
    notes: string,
}

export const getSongs = async (req: Request, res: Response, next: NextFunction) => {
    // get songs from the db 

    console.log("HERE");
    console.log(req);
    return res.status(200).json({
        message: "get songs"
    });
};

export const getSong = async (req: Request, res: Response, next: NextFunction) => {
    // get a song from the db 

    let id: string = req.params.id; 

    return res.status(200).json({
        message: "get a song"
    });
};

/**
 * const updateSong = async () => {};
 */

export const deleteSong = async (req: Request, res: Response, next: NextFunction) => {
    // delete a song from the db 

    let id: string = req.params.id; 

    return res.status(200).json({
        message: "delete a song"
    });
};

export const addSong = async (req: Request, res: Response, next: NextFunction) => {
    // add a song from the db 

    let title: string = req.body.title;
    let notes: string = req.body.notes;

    return res.status(200).json({
        message: "add a song"
    });
};