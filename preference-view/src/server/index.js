import React from 'react';
import express, { response } from 'express';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server';
import { App } from '../components/App'
import axios from 'axios';

const app = express();

app.use(express.static("dist"));

app.get('/', (_req,res) =>{
    const index = readFileSync('./public/index.html',`utf-8`);
    const rendered = renderToString(<App />);
    res.send(index.replace("{{rendered}}", rendered));
   
});

app.listen(3001, () => {
    console.log(`Server is listening on port: 3001`);
  });
console.info("server listening");