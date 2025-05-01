import { useState } from 'react';
import Loader from '@/components/icons/Loader';
import './buttons.scss';
import Icon from '../icons/Icon';
import clsx from 'clsx';

/**
 * Пропсы для компонента LinkButton
 */
interface LinkButtonProps {
  /**
   * Текст внутри кнопки-ссылки
   */
  text?: string;

  /**
   * Адрес перехода при клике
   */
  href: string;

  /**
   * Дополнительный класс для кнопки (например, 'contained', 'outlined')
   * @default ''
   */
  className?: string;

  /**
     * Иконка (React.component)
     * @default ''
     */
  icon?: string;
}

/**
 * Кнопка-ссылка с состоянием загрузки.
 * Использует компонент Loader и обёртку с классом main-button.
 *
 * @param text — отображаемый текст внутри кнопки
 * @param href — адрес ссылки
 * @param className — дополнительный CSS-класс (outlined/contained)
 */
const LinkButton = ({ text = '', href, className = 'contained', icon = '' }: LinkButtonProps) => {
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
      className={clsx('main-button', className, !text && 'ico-btn')}
      onClick={handleClick}
    >
      {icon && <Icon id={icon} />}
      <span className="main-button__text">
        {loading ? <Loader /> : text}
      </span>
    </a>
  );
}

export default LinkButton;
