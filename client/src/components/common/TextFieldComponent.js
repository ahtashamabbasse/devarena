import React from 'react';
import classnames from "classnames";
import PropTypes from 'prop-types'


const TextField = ({
                       name,
                       placeholder,
                       value,
                       label,
                       error,
                       info,
                       type,
                       onChange,
                       disabled
                   }) => {
    return (
        <div className="form-group">
            <input type={type}
                   className={classnames("form-control form-control-lg ", {'is-invalid': error})}
                   value={value}
                   onChange={onChange}
                   disabled={disabled}
                   placeholder={placeholder} name={name}/>
            {error && <div className={'invalid-feedback'}>{error}</div>}
            {info && <small className="form-text text-muted">{info}</small>}

        </div>
    );
};
TextField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

TextField.defaultProps = {
    type:"text",
    disabled:false
};
export default TextField;
