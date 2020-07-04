import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(
    `<div>
        Hello there!
        </div>`
  );
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
