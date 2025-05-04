import { useState, type FC } from 'react';
import Loader from '@/components/icons/Loader';
import './buttons.scss';
import Icon from '../icons/Icon';
import clsx from 'clsx';
import type { LinkButtonProps } from '@/types/components.interfaces';
import { getButtonSize } from './sizeUtil';

/**
 * Кнопка-ссылка с состоянием загрузки.
 * Использует компонент Loader и обёртку с классом main-button.
 *
 * @param text — отображаемый текст внутри кнопки
 * @param href — адрес ссылки
 * @param className — дополнительный CSS-класс (outlined/contained)
 */
const LinkButton: FC<LinkButtonProps> = ({ text = '', href, className = 'contained', icon = '', loader = false, s, m, l }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if(!loader) return;
    setLoading(true);
  };

  const size = getButtonSize({ s, m, l });

  return (
    <a
      href={href}
      aria-label={text}
      className={clsx('main-button', size, className, !text && 'icon-btn')}
      onClick={handleClick}
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
    </a>
  );
}

export default LinkButton;
