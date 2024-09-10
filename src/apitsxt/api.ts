import { Request, Response, NextFunction } from "express";
import * as tsxt from './tsxt'
import createError from "../error/createError";

export const api = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { name } = req.body
        console.log(name)
        if(!name || typeof name !== "string"){
            return createError("Incorrect name", 400)
        }

        await tsxt.nametsxt( { name } )

        res.json({mgs: "Todoname This OK :"})
    }catch(err){
        next(err)
    }
}

export const showapitodo = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const rs = await tsxt.showdatatodo()
        res.json({rs})
    }catch(err){
        next(err)
    }
}

