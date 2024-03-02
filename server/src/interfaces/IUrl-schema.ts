import { Document } from "mongoose";

export interface IUrlSchema extends Document {
    userId: string,
    id: string,
    shortId: string,
    redirectUrl: string,
    visitHistory: [number]
}