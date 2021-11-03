import React from 'react';

export const PreferencesComponent = (props) => (
    <div>
        <section className="card" >
        <div className="card-body">
        <h5 className="card-title">User Preferences</h5>
        <div className="ecom-customer-preference-feature">
            <table className="preferences">
                <thead className="preference-headers">
                <tr className="preference-header">
                    <th scope="col" className="preference-notification">
                        <span className="preference-notification-label">{props.notificationColHeader}</span>
                    </th>
                    <th scope="col" className="preference-email">
                        <span  className="preference-email-label">{props.emailColHeader}</span>
                    </th>
                    <th scope="col" className="preference-gutter"></th>
                </tr>
            </thead>
                {
                <tbody className="preference-items">
                    {Object.keys(props.response.notifications).map(function(keyName, keyIndex) {
                        return (
                            <tr>
                                <td className="preference-notification">
                                        <label className="preference-label" >{keyName}</label>
                                </td>
                                <td className="preference-email">
                                    <label className="label-container">
                                        <span>
                                        <input type="checkbox" value={keyName} checked={props.response.notifications[keyName]}/>
                                            <span className="custom-checkbox"></span>
                                        </span>
                                    </label>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                }
               
            </table>
        </div>
        </div>
        </section>
    </div>

)