import React from 'react';
import { HeaderComponent } from './HeaderComponent';
import { PreferencesComponent } from './PreferencesComponent';

export const App = (props) => (
    <div className="ecom-customer-preference-feature">
        <h1 className="page-title">
            {props.notificationColHeader}
        </h1>
        <HeaderComponent {...props}/>
        <PreferencesComponent {...props}/>
    </div>
)