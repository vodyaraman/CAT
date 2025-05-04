interface BaseButtonProps extends SizeFlags {
    text?: string;
    className?: string;
    icon?: string;
}

export type ButtonSize = 's' | 'm' | 'l';

export interface SizeFlags {
    s?: boolean;
    m?: boolean;
    l?: boolean;
}

/**
 * Свойства компонента LinkButton
 * 
 * @property {string} href — Адрес перехода при клике (обязательный)
 * @property {string} [text] — Текст внутри кнопки-ссылки (по умолчанию: '')
 * @property {string} [className] — Дополнительный класс для кнопки (например, 'contained', 'outlined') (по умолчанию: '')
 * @property {string} [icon] — Иконка (строка, имя иконки или путь к изображению) (по умолчанию: '')
 * @property {boolean} [loader] - вызывается ли loader после нажатия
 */
export interface LinkButtonProps extends BaseButtonProps {
    href: string;
    loader?: boolean;
}


/**
 * Свойства компонента MainButton
 * 
 * @property {() => void} [onClick] — Обработчик клика по кнопке
 * @property {'outlined' | 'contained'} [className] — Дополнительный класс кнопки: 'outlined' или 'contained' (по умолчанию: 'contained')
 * @property {boolean} [loading] — Состояние загрузки: отображает Loader вместо текста (по умолчанию: false)
 * @property {boolean} [disabled] — Делает кнопку неактивной (по умолчанию: false)
 * @property {'button' | 'submit' | 'reset'} [type] — Тип кнопки: button | submit | reset (по умолчанию: 'button')
 * @property {string} [text] — Текст внутри кнопки (по умолчанию: '')
 * @property {string} [icon] — Иконка (строка, имя иконки или путь к изображению) (по умолчанию: '')
 */
export interface MainButtonProps extends BaseButtonProps {
    onClick?: () => void;
    className?: 'outlined' | 'contained';
    loading?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

/**
 * Свойства компонента Card
 *
 * @property {string} [image] — Путь к изображению товара
 * @property {string} [title] — Название товара
 * @property {string} [description] — Короткое описание товара
 * @property {string} [price] — Цена товара
 * @property {() => void} [onAction] — Обработчик клика по кнопке
 * @property {string} [actionText] — Текст кнопки действия (по умолчанию: 'В корзину')
 * @property {ReactNode} [children] — Дополнительный контент внутри карточки
 * @property {string} [backgroundSrc] — Текстура заднего фона карточки
 */
export interface CardProps {
    image?: string;
    title?: string;
    description?: string;
    price?: string;
    onAction?: () => void;
    actionText?: string;
    children?: React.ReactNode;
    backgroundSrc?: string;
}

/**
 * Пропсы для компонента формы
 *
 * @property {string} title — Заголовок формы (обязательный)
 * @property {ReactNode} children — Дочерние элементы формы (поля ввода) (обязательный)
 * @property {(formData: Record<string, any>) => Promise<void> | void} onSubmit — Внешняя функция отправки после проверки данных (обязательная)
 * @property {string} [submitText] — Текст кнопки отправки (по умолчанию: "Отправить")
 * @property {string} [className] — Дополнительный класс для формы (по умолчанию: '')
 */
export interface FormProps {
    title: string;
    children: React.ReactNode;
    onSubmit: (formData: Record<string, any>) => Promise<void> | void;
    submitText?: string;
    className?: string;
}

/**
 * Ссылка в бургер-меню
 *
 * @property {string} label — Текст ссылки
 * @property {string} href — Адрес перехода
 */
export interface BurgerLink {
    label: string;
    href: string;
}

/**
 * Пропсы для компонента бургер-меню
 *
 * @property {BurgerLink[]} [links] — Массив ссылок для отображения в меню
 */
export interface BurgerMenuProps {
    links?: BurgerLink[];
}

/**
 * Пропсы для SVG-иконки
 *
 * @property {string} id — Уникальный идентификатор иконки (используется внутри <use xlink:href>)
 * @property {string} [className] — Дополнительный CSS-класс для стилизации
 */
export interface IconProps {
    id: string;
    className?: string;
}

/**
 * Пропсы для компонента FormInput
 *
 * @property {string} id — Уникальный идентификатор поля ввода
 * @property {string} type — Тип поля ввода (например, 'text', 'email', 'password')
 * @property {string} label — Текст метки для поля
 * @property {string} [value] — Контролируемое значение поля
 * @property {string} [defaultValue] — Неконтролируемое значение по умолчанию
 * @property {string} [error] — Сообщение об ошибке для отображения
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] — Обработчик изменения значения поля
 */
export interface FormInputProps {
    id: string;
    type: string;
    label: string;
    value?: string;
    defaultValue?: string;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Пропсы для компонента Skeleton
 *
 * @property {'block' | 'title' | 'text'} [type] — Визуальный тип скелетона:
 * - 'block' — базовый прямоугольник (по умолчанию)
 * - 'title' — заглушка для заголовка (шире и выше текста)
 * - 'text' — тонкая полоска для имитации текстовой строки
 *
 * @property {ReactNode} [children] — Вложенные элементы Skeleton.
 * Используется для создания сложной структуры скелетона.
 */
export interface SkeletonProps {
    type?: 'block' | 'title' | 'text';
    children?: React.ReactNode;
}
