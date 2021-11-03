import React from 'react';

export const HeaderComponent = (props) => (
    <div className="ecom-customer-preference-view-feature" >
        <section className="card">
            <div className="card-body">
                <div className="card-primary-content">
                    <h5 className="card-title">{props.sectionLabel}</h5>
                    <a className="edit-profile-link" href="/account/user-profile.jsp">
                       Edit
                    </a>
                    <div className="card-primary-content-body">
                        <div className="card-subtitle">{props.emailColHeader}</div>
                        <div className="contact-info-message">
                            <label className="contact-email">
                                <span className="contact-email-label">{props.emailColHeader}</span>
                                <span className="contact-email-input">{props.response.details.emailAddress}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

)