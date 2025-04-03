import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.use((_req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 4002;
const serviceName = process.env.SERVICE_NAME || 'Inventory-Service';

app.listen(PORT, () => {
    console.log(`${serviceName} is running on port ${PORT}`);
});