import { type FC } from 'react';
import './skeleton.scss';
import type { SkeletonProps } from '@/types/components.interfaces';

/**
 * Компонент Skeleton
 * 
 * Отображает универсальный скелетон-заглушку с возможностью вложенности.
 * Поддерживает разные визуальные типы скелетона для имитации структуры контента.
 *
 * @param type - визуальный тип скелетона:
 *   - 'block' (по умолчанию) — прямоугольная область, имитирующая блок (например, изображение).
 *   - 'title' — заглушка для заголовка (шире и выше обычного текста).
 *   - 'text' — узкая полоска для имитации текстовых строк.
 *
 * @param children - вложенные элементы Skeleton для создания структуры скелетона.
 */
const Skeleton: FC<SkeletonProps> = ({
  type = 'block',
  children,
}) => {
  return (
    <div className={`skeleton skeleton--${type}`}>
      {children}
    </div>
  );
};

export default Skeleton;
