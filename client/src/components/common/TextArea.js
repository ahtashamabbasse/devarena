import React from 'react';
import classnames from "classnames";
import PropTypes from 'prop-types'


const TextArea = ({
                      name,
                      placeholder,
                      value,
                      error,
                      info,
                      onChange,
                  }) => {
    return (
        <div className="form-group">
            <textarea
                      className={classnames("form-control form-control-lg ", {'is-invalid': error})}
                      value={value}
                      onChange={onChange}
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
};
export default TextArea;
