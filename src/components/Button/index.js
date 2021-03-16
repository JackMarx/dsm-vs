import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const mkButton = buttonType => ({
    children,
    className,
    type,
    small,
    large,
    ...restProps
  }) => {
    const smallOption = small ? ' vs-sm-btn' : "";
    const largeOption = large ? ' vs-lg-btn' : "";
    const classNameOption = className || "";
    const classList = `vs-btn-d vs-${type}-btn ` + classNameOption + smallOption + largeOption
  
    return (
      <button {...restProps} type={buttonType} className={classList}>
        {children}
      </button>
    );
  };
  
export const Button = mkButton('button');
export const SubmitButton = mkButton('submit');

Button.displayName = "Button";
SubmitButton.displayName = "SubmitButton";

Button.defaultProps = {
  children: null,
  className: null,
  type: null,
  small: null,
  large: null
};

Button.propTypes = {
    type: PropTypes.oneOf([
      'primary',
      'success',
      'info',
      'default',
      'warning',
      'danger',
      'solid-primary',
      'solid-primary-raised',
      'solid-secondary',
      'outline-primary',
      'outline-secondary',
      'outline-secondary-raised',
      'rounded-solid',
      'rounded-outline',
      'icon',
      'text',
      'text-link',
      'inline-outline-secondary',
      'solid-primary-pill',
      'solid-secondary-pill',
      'solid-outline-raised-pill',
    ]).isRequired,
    small: PropTypes.bool,
    large: PropTypes.bool,
  };
  