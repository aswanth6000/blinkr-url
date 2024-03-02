import { Router } from "express";
import { urlRepository } from "../repositories/url-repo";
import urlModel from "../../models/url-model";
import { UrlController } from "../controllers/url-controller";

const urlController = new UrlController()

const urlRouter = Router();

urlRouter.post('/url', urlController.generateNewUrl)

export default urlRouter
