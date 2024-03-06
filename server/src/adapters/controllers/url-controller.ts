import { Request,Response } from "express"
import shortid from "shortid"
import urlModel from "../../models/url-model";
export class UrlController {
    async generateNewUrl(req: Request, res: Response){
        try {
          const CONST_URL = 'https://blinkr-url.onrender.com/'
            const shortId = shortid.generate();
            const shortURI = CONST_URL + shortId;
            const {url, userId} = req.body
            
            const savedUrl = await urlModel.create({
                userId: userId,
                shortId: shortId,
                redirectUrl: url,
                visitHistory: [],
              });
              

            return res.status(200).json({messge: "url fetch success", shortId: shortURI});

        } catch (error) {
            return res.status(500).json({messge: "internal server error", error})
        }
    }
    async handleGetAnalytics(req: Request, res: Response) {
        const shortId = req.params.shortId;
        const result = await urlModel.findOne({ shortId });
        return res.json({
          totalClicks: result?.visitHistory.length,
          analytics: result?.visitHistory,
        });
      }
      async reUrl (req: Request, res:Response) {
        const shortId = req.params.shortId;
        const entry = await urlModel.findOneAndUpdate(
          {
            shortId,
          },
          {
            $push: {
              visitHistory: {
                timestamp: Date.now(),
              },
            },
          }
        );
        if (entry) {
            res.redirect(entry?.redirectUrl);
        }
      }
}