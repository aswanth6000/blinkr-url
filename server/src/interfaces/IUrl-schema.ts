import { Document } from "mongoose";

export interface IUrlSchema extends Document {
    id: string,
    shortId: string,
    redirectUrl: string,
    visitHistory: [number]
}