import React from 'react';
import './inputs.scss';
import type { FormInputProps } from '@/types/components.interfaces';

/**
 * Переиспользуемое поле ввода с меткой и отображением ошибки.
 *
 * @param id — уникальный идентификатор input
 * @param type — тип input (text, email, password и др.)
 * @param label — текст для метки
 * @param value — контролируемое значение поля
 * @param defaultValue — неконтролируемое значение по умолчанию
 * @param error — текст ошибки
 * @param onChange — обработчик события изменения
 */
const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  label,
  value,
  defaultValue,
  error,
  onChange,
}) => {
  const getAutoComplete = () => {
    switch (id) {
      case 'email':
        return 'email';
      case 'password':
        return 'current-password';
      case 'new-password':
        return 'new-password';
      case 'firstName':
        return 'given-name';
      case 'lastName':
        return 'family-name';
      case 'phone':
        return 'tel';
      case 'address':
        return 'street-address';
      default:
        return 'on';
    }
  };

  return (
    <div className="form-field">
      <input
        id={id}
        name={id}
        type={type}
        placeholder=" "
        autoComplete={getAutoComplete()}
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
