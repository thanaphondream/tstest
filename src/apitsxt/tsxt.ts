import { Prisma } from "@prisma/client";
import db from "../prismats/db"


export const nametsxt = (name: Prisma.TodoCreateInput) => {
    console.log(name)
    return db.name.create({
        data: name
    })
}

export const showdatatodo = () => {
    const rs = db.name.    findMany()
    return rs
}