import Express from 'express';



import dotenv from 'dotenv';
dotenv.config();
const app = Express();
const PORT = process.env.PORT || 3030;



app.get('/home', (req, res) => {
  res.json('Home');
});

app.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});
