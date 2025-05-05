import { type FC, useState } from 'react';
import Form from '@/components/form/Form';
import FormInput from '@/components/inputs/FormInput';

/**
 * Компонент-обёртка .tsx для использования формы React в компонентах .astro, подлежит дублированию, при необходимости
 */
export const FormExamplePage: FC = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = async (data: Record<string, any>) => {
    const newErrors: Record<string, string> = {};

    if (!data.email) {
      newErrors.email = 'Email обязателен для отправки';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Некорректный формат email';
    }

    if (!data.password) {
      newErrors.password = 'Пароль обязателен для отправки';
    } else if (data.password.length < 6) {
      newErrors.password = 'Пароль должен содержать минимум 6 символов';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      throw new Error('Форма содержит ошибки: ', newErrors);
    }

    setErrors({});

    // Эмуляция работы (3 секунды)
    await new Promise(resolve => setTimeout(resolve, 3000));
  };


  return (
    <Form
      title="Регистрация"
      onSubmit={handleFormSubmit}
      submitText="Зарегистрироваться"
    >
      <FormInput key="email" id="email" type="email" label="Email" error={errors.email} />,
      <FormInput key="password" id="password" type="password" label="Пароль" error={errors.password} />,
    </Form>
  );
};

