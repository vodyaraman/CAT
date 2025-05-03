import { useState, type FC } from 'react';
import Loader from '@/components/icons/Loader';
import './buttons.scss';
import Icon from '../icons/Icon';
import clsx from 'clsx';
import type { LinkButtonProps } from '@/types/interfaces';

/**
 * Кнопка-ссылка с состоянием загрузки.
 * Использует компонент Loader и обёртку с классом main-button.
 *
 * @param text — отображаемый текст внутри кнопки
 * @param href — адрес ссылки
 * @param className — дополнительный CSS-класс (outlined/contained)
 */
const LinkButton: FC<LinkButtonProps> = ({ text = '', href, className = 'contained', icon = '' }) => {
  const [loading, setLoading] = useState(false);

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
