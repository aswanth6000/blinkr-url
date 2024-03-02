import { Request,Response } from "express"
import shortid from "shortid"
import urlModel from "../../models/url-model";
export class UrlController {
    async generateNewUrl(req: Request, res: Response){
        try {
            const shortId = shortid.generate();
            const {url, userId} = req.body
            console.log(shortId);
            
            const savedUrl = await urlModel.create({
                userId: userId,
                shortId: shortId,
                redirectUrl: url,
                visitHistory: [],
              });
              console.log('created', savedUrl);

            return res.status(200).json({messge: "url fetch success", shortId: shortId})

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