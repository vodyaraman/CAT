import { useState } from 'react';
import Loader from '@/components/icons/Loader';
import './buttons.scss';

/**
 * Пропсы для компонента LinkButton
 */
interface LinkButtonProps {
  /**
   * Текст внутри кнопки-ссылки
   */
  text: string;

  /**
   * Адрес перехода при клике
   */
  href: string;

  /**
   * Дополнительный класс для кнопки (например, 'contained', 'outlined')
   * @default ''
   */
  className?: string;
}

/**
 * Кнопка-ссылка с состоянием загрузки.
 * Использует компонент Loader и обёртку с классом main-button.
 *
 * @param text — отображаемый текст внутри кнопки
 * @param href — адрес ссылки
 * @param className — дополнительный CSS-класс (outlined/contained)
 */
export default function LinkButton({ text, href, className = '' }: LinkButtonProps) {
  /**
   * Флаг состояния загрузки при клике
   */
  const [loading, setLoading] = useState(false);

  /**
   * Обработчик клика по ссылке
   *
   * @param e — событие клика
   */
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setLoading(true);
  };

  return (
    <a
      href={href}
      aria-label={text}
      className={`main-button ${className}`}
      onClick={handleClick}
    >
      <span className="main-button__text">
        {loading ? <Loader /> : text}
      </span>
    </a>
  );
}
