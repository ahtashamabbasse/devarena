import React from 'react';
import classnames from "classnames";
import PropTypes from 'prop-types'


const InputField = ({
                        name,
                        placeholder,
                        value,
                        icon,
                        error,
                        info,
                        type,
                        onChange,
                        disabled
                    }) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className={icon}/>
                </span>
            </div>

            <input type={type}
                   className={classnames("form-control form-control-lg ", {'is-invalid': error})}
                   value={value}
                   onChange={onChange}
                   disabled={disabled}
                   placeholder={placeholder} name={name}/>
            {info && <small className="form-text text-muted">{info}</small>}

        </div>
    );
};
InputField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: "text",
    disabled: false
};
export default InputField;
