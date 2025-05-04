import { type FC, useState } from 'react';
import MainButton from '@/components/buttons/MainButton';
import './Form.scss';
import type { FormProps } from '@/types/components.interfaces';

/**
 * Компонент формы с заголовком, полями и встроенной кнопкой отправки.
 *
 * @param title — заголовок формы
 * @param children — поля формы
 * @param onSubmit — функция обработки отправки
 * @param submitText — текст кнопки отправки
 * @param className — дополнительный CSS-класс для формы
 */
const Form: FC<FormProps> = ({
    title,
    children,
    onSubmit,
    submitText = 'Отправить',
    className = '',
}) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data: Record<string, any> = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            await onSubmit(data);
            console.log('Код @/components/form/Form.js (отладка): форма отправлена с данными', JSON.stringify(data, null, 2));
        } catch (error) {
            console.log('Код @/components/form/Form.js (отладка): форма НЕ отправлена с данными', JSON.stringify(data, null, 2), error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={`form ${className}`} onSubmit={handleSubmit}>
            <h2 className="form__title">{title}</h2>
            <div className="form__fields">
                {children}
            </div>
            <div className="form__actions">
                <MainButton
                    text={submitText}
                    onClick={() => { }}
                    type="submit"
                    loading={loading}
                />
            </div>
        </form>
    );
};

export default Form;
