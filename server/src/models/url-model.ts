import mongoose, {Schema, Document} from "mongoose";
import { IUrlSchema } from "../interfaces/IUrl-schema";

const urlSchema = new Schema<IUrlSchema>({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
        unique: true
    },
    visitHistory: [{timestamp: {type: Number}}]
}, {timestamps: true});

export default mongoose.model<IUrlSchema>("url", urlSchema);
