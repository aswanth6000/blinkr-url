import { Request,Response } from "express"

export class UrlController {
    async generateNewUrl(req: Request, res: Response){
        try {
            const url = req.body
            console.log(req.body);
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
            if(!urlRegex.test(url.url)){
                return res.status(400).json({message: 'invalid url'});
            }
            return res.status(200).json({messge: "url fetch success", url})

        } catch (error) {
            
        }
    }
}