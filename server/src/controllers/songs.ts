import { Request, Response, NextFunction } from 'express';
import { DB } from '../Database';
import axios, { AxiosResponse } from 'axios';
import path from 'path';

interface Song {
    id: number, 
    title: string,
    notes: string,
}

export const getSongs = async (req: Request, res: Response, next: NextFunction) => {
    // get songs from the db 
    try {
        console.log(req);
        return res.status(200).json({
            message: "get songs"
        });
    }
    catch(err) {
        next(err);
    }
};

export const getSong = async (req: Request, res: Response, next: NextFunction) => {
    // get a song from the db 
    try {
        const id: string = req.params.id; 

        return res.status(200).json({
            message: "get a song"
        });
    }
    catch(err) {
        next(err);
    }
};

/**
 * const updateSong = async () => {};
 */

export const deleteSong = async (req: Request, res: Response, next: NextFunction) => {
    // delete a song from the db 
    try {
        const id: string = req.params.id; 

        return res.status(200).json({
            message: "delete a song"
        });
    }
    catch(err) {
        next(err);
    }
};

export const addSong = async (req: Request, res: Response, next: NextFunction) => {
    // add a song from the db 
    try {
        const { song_title, song } = req.body;

        if(!song_title || !song) {
            return res.status(400).json({
                message: "Invalid body sent from request"
            });
        }
        
        const notes: string = song.join(" ");
        const data = await DB.runQuery(path.join('insert_song'), song_title, notes);

        return res.status(201).json({
            message: "Successfully added a new song",
            data: data
        });
    }
    catch(err) {
        next(err);
    }
};