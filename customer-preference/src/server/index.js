import React from 'react';
import express, { response } from 'express';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server';
import { App } from '../components/App'
import axios from 'axios';

const app = express();

app.use(express.static("dist"));

app.get("/defaultContent", async(_req, res) =>{
    res.json(defaultContent);
});

app.get("/preference", async(_req, res) =>{
    if(defaultContent['response']){
        res.json(defaultContent);
    }
    else{
        getProfile()
        .then(response=>{
            defaultContent['response'] = response;
            console.log("this ===>",defaultContent);
            res.json(defaultContent);
        })
    }
});
let defaultContent ={
    sectionLabel: "User Preferences:",
    notificationColHeader: "Notification",
    emailColHeader: "Email",
    preferenceLabel: "Enabled: ",
    saveButtonLabel: "Save",
    cancelButtonLabel: "Cancel"
  }
app.get('/', (_req,res) =>{
    defaultContent['response'] = response;
    console.log("this ===>",defaultContent);
    const index = readFileSync('./public/index.html',`utf-8`);
    const rendered = renderToString(<App  {...defaultContent} />);
    res.send(index.replace("{{rendered}}", rendered));
   
});


app.listen(3002, () => {
    console.log(`Server is listening on port: 3002`);
  });
console.info("server listening");