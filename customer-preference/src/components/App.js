import React from 'react';
import HeaderComponent from './HeaderComponent';
import PreferencesComponent  from './PreferencesComponent';
import Button  from './Button';

const App = (props) => (
    <div className="ecom-customer-preference-feature">
        <h1 className="page-title">
            {props.notificationColHeader}
        </h1>
        <HeaderComponent {...props}/>
        <PreferencesComponent {...props}/>
        <Button {...props}/>
    </div>
)
export default App;