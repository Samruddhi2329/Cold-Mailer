import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import fileRouts from './routes/file.routes.js';
import mailRouts from './routes/mail.routes.js'
const app = express()
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/files', fileRouts)
app.use('/api/mails', mailRouts)

app.get('/', (req, res) => {
  res.send("ColdMailer API is running");
});
const port = 5000;


connectDB()
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
