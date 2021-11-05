import React from "react";

const Button = (props) => (
<div className="preference-actions row justify-content-end m-0 mt-3">
    <input className="action-submit btn-primary btn ml-md-2 col-12 col-md-auto" type="button" value = {props.saveButtonLabel}></input>
    <input className="action-cancel btn-outline-primary btn ml-md-2 col-12 col-md-auto mt-2;" type="button" value = {props.cancelButtonLabel}></input>
</div>
);

export default Button;
