import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();



// Your other app configurations...

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
