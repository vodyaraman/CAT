import React from 'react';
import './inputs.scss';

/**
 * Пропсы для компонента FormInput
 */
interface FormInputProps {
  /**
   * Уникальный идентификатор поля ввода
   */
  id: string;

  /**
   * Тип поля ввода (например, 'text', 'email', 'password')
   */
  type: string;

  /**
   * Текст метки для поля
   */
  label: string;

  /**
   * Контролируемое значение поля
   */
  value?: string;

  /**
   * Неконтролируемое значение по умолчанию
   */
  defaultValue?: string;

  /**
   * Сообщение об ошибке для отображения
   */
  error?: string;

  /**
   * Обработчик изменения значения поля
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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
