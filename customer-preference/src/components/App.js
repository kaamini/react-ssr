import React from 'react';

import { Button } from './Button';

export const App = (props) => (
    <div className="ecom-customer-preference-feature">
        <h1 className="page-title">
            {props.notificationColHeader}
        </h1>
        <Button />
    </div>
)