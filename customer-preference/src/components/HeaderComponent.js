import React from 'react';

const HeaderComponent = (props) => (
    <section className="card mb-3">
        <div className="card-body">
            <div className="card-primary-content row pb-1 justify-content-between" >
                <h5 className="card-title col-auto">Contact</h5>
                <a className="edit-profile-link col-auto d-none d-md-block" href="/account/user-profile.jsp">
                Edit in My Profile </a>
                <div className="card-primary-content-body col-12">
                <div className="card-subtitle mb-2"> All notifications will be sent to this email address</div>
                    <div className="contact-info-message">
                        <label className="contact-email">
                            <span className="contact-email-label pl-0 pr-2 d-block d-sm-inline font-weight-bold">{props.emailColHeader} : </span>
                            <span className="contact-email-input border-0">{props.response.details.emailAddress}</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="card-secondary-content row">
          <div className="card-secondary-content-body col-12">
            <a className="edit-profile-link d-block d-md-none btn btn-outline-primary" href="/account/user-profile.jsp">Edit
            </a>
          </div>
        </div>
        </div>
    </section>

)


export default HeaderComponent;