import { type FC } from 'react';
import MainButton from '@/components/buttons/MainButton';
import './cards.scss';
import type { CardProps } from '@/types/components.interfaces';

/**
 * Карточка товара.
 * 
 * Отображает изображение, заголовок, описание, цену, кнопку действия и дополнительный контент.
 *
 * @param image - путь к изображению товара
 * @param title - название товара
 * @param description - краткое описание товара
 * @param price - стоимость товара
 * @param onAction - обработчик клика по кнопке действия
 * @param actionText - текст кнопки действия (по умолчанию "В корзину")
 * @param children - дополнительный контент внутри карточки
 * @param backgroundSrc - текстура заднего фона карточки
 */
const Card: FC<CardProps> = ({
    image,
    title,
    description,
    price,
    onAction,
    actionText = 'В корзину',
    children,
    backgroundSrc,
}) => {
    return (
        <div className="card">
            {backgroundSrc && (
                <div
                    className="card__background"
                    style={backgroundSrc ? { backgroundImage: `url(${backgroundSrc})` } : undefined}
                />
            )}
            {image && (
                <div className="card__image-wrapper">
                    <img src={image} alt={title || 'Изображение'} className="card__image" />
                </div>
            )}
            <div className="card__content">
                {title && <h3 className="card__title">{title}</h3>}
                {description && <p className="card__description">{description}</p>}
                {children}
                {(price || onAction) && (
                    <div className="card__footer">
                        {price && <span className="card__price">{price}</span>}
                        {onAction && (
                            <MainButton
                                text={actionText}
                                onClick={onAction}
                                className="contained"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
