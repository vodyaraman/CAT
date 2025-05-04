import { type FC } from 'react';
import './buttons.scss';
import Loader from '@/components/icons/Loader';
import Icon from '../icons/Icon';
import clsx from 'clsx';
import type { MainButtonProps } from '@/types/components.interfaces';
import { getButtonSize } from './sizeUtil';

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
    s, m, l
}) => {

    const handleClick = () => {
        if (disabled || loading) return;
        if (onClick) onClick();
    };

    const size = getButtonSize({ s, m, l });

    return (
        <button
            className={clsx('main-button', size, className, (disabled || loading) ? 'disabled' : '', !text && 'icon-btn')}
            onClick={handleClick}
            disabled={disabled || loading}
            type={type}
        >
            <span className="main-button__text">
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {icon && <Icon id={icon} />}
                        {text}
                    </>
                )}
            </span>
        </button>
    );
};

export default MainButton;
