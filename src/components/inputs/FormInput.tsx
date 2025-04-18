import React from 'react';
import './inputs.scss';

interface FormInputProps {
  id: string;
  type: string;
  label: string;
  value?: string;
  defaultValue?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  label,
  value,
  defaultValue,
  error,
  onChange,
}) => {
  return (
    <div className="form-field">
      <input
        id={id}
        type={type}
        placeholder=" "
        className="form-field__input"
        {...(value !== undefined ? { value } : { defaultValue })}
        onChange={onChange}
      />
      <label htmlFor={id} className="form-field__label">
        {error ? <div className="form-field__error">{error}</div> : <>{label}</>}
      </label>
    </div>
  );
};

export default FormInput;
