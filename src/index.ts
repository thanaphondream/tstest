import 'dotenv/config'
import express from "express";
import cors from "cors";
import router from './Router/router';

const app = express(); 

app.use(cors());

app.use(express.json());

app.use('/api', router)

// app.get('/test', (req, res) => {
//     res.send('Server is running...');
// });

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on post ${port}`));