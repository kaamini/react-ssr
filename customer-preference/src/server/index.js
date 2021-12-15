import React from 'react';
import express, { response } from 'express';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server';
import  App from '../components/App';
import  PreferencesComponent from '../components/PreferencesComponent';
import  Button from '../components/Button';

const app = express();

app.use(express.static("dist"));

app.get("/defaultContent", async(_req, res) =>{
    res.json(defaultContent);
});

app.get("/preference", async(_req, res) =>{
    res.json(defaultContent);
});
let defaultContent = {
    "sectionLabel":"User Preferences:",
    "notificationColHeader":"Notification",
    "emailColHeader":"Email",
    "preferenceLabel":"Enabled: ",
    "saveButtonLabel":"Save",
    "cancelButtonLabel":"Cancel",
    "response": {
        "details":
        {
            "firstName":"TestHomeHealth",
            "emailAddress":"test@medline.com"
        },
            "notifications":[
                { id: 'orderRejectedPref', label: 'Order Rejected', checked: true },
                { id: 'orderApprovedPref', label: 'Order Approved', checked: true },
               { id: 'orderPendingApprovalPref', label: 'Order Pending Approval', checked: false  }
             ],
            "username":"TEST_HH_User01"}
        };
let notificationOption = {
    "response": {
        "details":
        {
            "firstName":"TestHomeHealth",
            "emailAddress":"test@medline.com"
        },
        "notifications":{
            "option1":false,
            "option2":true,
            "option3":false
        },
    "username":"TEST_HH_User01"
    }
};
app.get('/', (_req,res) =>{
    const index = readFileSync('./public/index.html',`utf-8`);
    const rendered = renderToString(<App  {...defaultContent} />);
    res.send(index.replace("{{rendered}}", rendered));
});

app.get('/preferences', (_req,res) =>{
    const rendered = renderToString(<PreferencesComponent  {...notificationOption} />);
    res.send(rendered);

});

app.get('/buttons', (_req,res) =>{
    const rendered = renderToString(<Button  {...defaultContent} />);
    res.send(rendered);

});

app.listen(3002, () => {
    console.log(`Server is listening on port: 3002`);
  });
console.info("server listening");