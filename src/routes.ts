import express, {Request, Response,} from "express";

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
	console.log("A GET request was sent!");
	res.send('Express + TypeScript Server here! Yeah!');
});

router.post('/register', (req: Request, res: Response, next: Function): void => {

	if (!req.body.firstName) {
		res.status(400).json("Need to pass first name")
	} else {
		res.status(201).json({ message: `User ${req.body.firstName} is created` })
	}
});

export default router;
