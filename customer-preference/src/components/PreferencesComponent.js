import React from 'react';

const PreferencesComponent = (props) => (
    <section className="card mb-3" >
        <div className="card-body">
        <h5 className="card-title">Order Notifications</h5>
        <div className="card-subtitle"> Get email updates about your order status. </div>
        <div className="ecom-customer-preference-feature container">
            <table className="table preferences">
                <caption class="preference-title d-none"> User Preferences: </caption>
                <thead className="preference-headers">
                <tr className="preference-header">
                    <th scope="col" className="preference-notification col-6">
                        <span className="preference-notification-label">{props.notificationColHeader}</span>
                    </th>
                    <th scope="col" className="preference-email text-center col-2">
                        <span  className="preference-email-label">{props.emailColHeader}</span>
                    </th>
                    <th scope="col" className="preference-gutter col-auto"></th>
                </tr>
            </thead>
                {
                <tbody className="preference-items">
                    {Object.keys(props.response.notifications).map(function(keyName, keyIndex) {
                        return (
                            <tr>
                                <td className="preference-notification">
                                    <label className="preference-label form-check-label" >{keyName}</label>
                                </td>
                                <td className="preference-email text-center">
                                    <label className="label-container d-block position-relative">
                                        <span>
                                        <input className="preference-input form-check-input checkbox-button" type="checkbox" value={keyName} checked={props.response.notifications[keyName]}/>
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
                <div className="preference-actions row justify-content-end m-0 mt-3">
                <input className="action-submit btn ml-md-2 col-12 col-md-auto btn-primary" type="button" value = {props.saveButtonLabel}></input>
                    <input className="action-cancel d-none btn ml-md-2 col-12 col-md-auto mt-2 mt-md-auto btn-outline-primary" type="button" value = {props.cancelButtonLabel}></input>
                </div>
        </div>
        </div>
        </section>
)

export default PreferencesComponent;