import { type FC } from 'react';
import './buttons.scss';
import Loader from '@/components/icons/Loader';
import Icon from '../icons/Icon';
import clsx from 'clsx';

interface MainButtonProps {
    /**
     * Текст внутри кнопки
     */
    text?: string;

    /**
     * Обработчик клика по кнопке
     */
    onClick?: () => void;

    /**
     * Дополнительный класс кнопки: 'outlined' или 'contained'
     * @default 'contained'
     */
    className?: 'outlined' | 'contained';

    /**
     * Состояние загрузки: отображает Loader вместо текста
     * @default false
     */
    loading?: boolean;

    /**
     * Делает кнопку неактивной
     * @default false
     */
    disabled?: boolean;

    /**
     * Тип кнопки (button | submit | reset)
     * @default 'button'
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     * Иконка (React.component)
     * @default ''
     */
    icon?: string;
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
    text = '',
    onClick = () => { },
    className = 'contained',
    loading = false,
    disabled = false,
    type = 'button',
    icon = '',
}) => {

    const handleClick = () => {
        if (disabled || loading) return;
        if (onClick) onClick();
    };

    return (
        <button
            className={clsx('main-button', className, (disabled || loading) ? 'disabled' : '', !text && 'ico-btn')}
            onClick={handleClick}
            disabled={disabled || loading}
            type={type}
        >
            {icon && <Icon id={icon} />}
            <span className="main-button__text">{loading ? <Loader /> : text}</span>
        </button>
    );
};

export default MainButton;
