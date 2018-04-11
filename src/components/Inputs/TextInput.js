import React from 'react';

const TextInput = (props) => (
  <div className="text-input-container">
    <div className={`form-group ${props.errors[props.name] ? 'has-error' : ''}`}>
      <label htmlFor={props.for} className="control-label">{props.label} {props.required && <span className="required-field-star">*</span>}</label>
      <div className="text-input">
        <input
          type="text"
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
          autoFocus={(props.errors[props.name] && props.errors[props.name].focused) || props.autoFocus}
          disabled={props.disabled}
          title={props.title}
          maxLength={props.maxLength}
          onClick={props.onClick}
          id={props.id}
        />
        {props.errors[props.name] &&
          <span className="help-block m-b-none">{props.errors[props.name].message}</span>
        }
        {props.smallmsg &&
          <small className="form-text text-muted">props.smallmsg</small>}
      </div>
    </div>
  </div>
);

export default TextInput;
