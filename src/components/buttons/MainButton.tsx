import { type FC } from 'react';
import Loader from '@/components/icons/Loader';

interface MainButtonProps {
    /**
     * Текст внутри кнопки
     */
    text: string;

    /**
     * Обработчик клика по кнопке
     */
    onClick: () => void;

    /**
     * Дополнительный класс кнопки: 'outlined' или 'contained'
     * @default 'contained'
     */
    className?: 'outlined' | 'contained';

    /**
     * Состояние загрузки: отображает Loader вместо текста
     * @default false
     */
    loading?: boolean | string;

    /**
     * Делает кнопку неактивной
     * @default false
     */
    disabled?: boolean | string;

    /**
     * Тип кнопки (button | submit | reset)
     * @default 'button'
     */
    type?: 'button' | 'submit' | 'reset';
}

/**
 * Переиспользуемая кнопка для глобального шаблона.
 * Не использовать в .astro компонентах напрямую (!!!)
 *
 * @param text — текст внутри кнопки
 * @param onClick — обработчик нажатия на кнопку
 * @param className — стиль кнопки ('outlined' | 'contained'), по умолчанию 'contained'
 * @param loading — если true, отображается Loader вместо текста
 * @param disabled — делает кнопку неактивной
 * @param type — тип HTML-кнопки ('button' | 'submit' | 'reset'), по умолчанию 'button'
 */
const MainButton: FC<MainButtonProps> = ({
    text,
    onClick,
    className = 'contained',
    loading = false,
    disabled = false,
    type = 'button',
}) => {
    const isDisabled = disabled === true || disabled === 'true';
    const isLoading = loading === true || loading === 'true';

    const buttonClass = [
        'main-button',
        className,
        (isDisabled || isLoading) ? 'disabled' : ''
    ].filter(Boolean).join(' ');

    const handleClick = () => {
        if (isDisabled || isLoading) return;
        if (onClick) onClick();
    };

    return (
        <button
            className={buttonClass}
            onClick={handleClick}
            disabled={isDisabled || isLoading}
            type={type}
        >
            <span className="main-button__text">{isLoading ? <Loader />: text }</span>
        </button>
    );
};

export default MainButton;
