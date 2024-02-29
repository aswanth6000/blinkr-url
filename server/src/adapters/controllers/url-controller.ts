

export class UrlController {
    async generateNewUrl(req: Request, res: Response){
        try {
            const url = req.body
            return res.status(401).json({messgae:"incorrect password"})
            
        } catch (error) {
            
        }
    }
}