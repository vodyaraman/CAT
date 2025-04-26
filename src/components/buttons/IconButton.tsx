import { type FC } from 'react';
import './buttons.scss';

/**
 * Пропсы для компонента IconButton
 */
interface IconButtonProps {
  /**
   * Путь к иконке
   */
  src: string;

  /**
   * Альтернативный текст для иконки
   */
  alt?: string;

  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Ссылка перехода. Если указана — рендерится как <a>
   */
  href?: string;

  /**
   * Обработчик клика
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  /**
   * Атрибут aria-label для доступности
   */
  'aria-label'?: string;
}

/**
 * Универсальная кнопка-иконка: <button> или <a> с картинкой.
 */
const IconButton: FC<IconButtonProps> = ({
  src,
  alt = '',
  className = '',
  href,
  onClick,
  'aria-label': ariaLabel,
}) => {
  if (href) {
    return (
      <a
        href={href}
        className={`main-button icon-button ${className}`.trim()}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <img src={src} alt={alt} className="main-button__image" />
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`main-button icon-button ${className}`.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src={src} alt={alt} className="main-button__image" draggable="false"/>
    </button>
  );
};

export default IconButton;
