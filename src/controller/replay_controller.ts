import express, {Request, Response,} from "express";

const router = express.Router();

class ReplayController {

	static list(req: Request, res: Response) {
		res.json({somekey: "TODO"});
	};
}

router.use('/', ReplayController.list)

export default router;
