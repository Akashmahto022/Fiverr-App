import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.get('/', (req, res)=>{
    res.send("hi Akash Mahto")
})

app.get('/name', (req, res)=>{
    res.send("your name is Akash Mahto")
})


export {app}