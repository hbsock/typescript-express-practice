import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

/*
app.get('/', (req: Request, res: Response) => {
	console.log("A GET request was sent!");
	res.send('Express + TypeScript Server here! Yeah!');
});
*/

app.listen(port, (): void => {
	  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
