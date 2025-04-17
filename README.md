📁 Структура проекта
csharp
Копировать
Редактировать
.
├── .astro/                  # Кэш Astro
├── .vscode/                 # Настройки редактора (опционально)
├── node_modules/            # Установленные зависимости
├── public/                  # Статические ресурсы (изображения, шрифты и т.д.)
├── src/                     # Исходный код проекта
│   ├── global_styles/       # Глобальные стили SCSS
│   │   ├── mixins.scss      # Миксины для SCSS (сетка, адаптив и т.д.)
│   │   └── variables.scss   # Цвета, отступы, брейкпоинты и другие переменные
│   └── pages/               # Astro-страницы (index.astro и др.)
├── .gitignore               # Игнорируемые Git-файлы
├── astro.config.mjs         # Конфигурация Astro + Vite + алиасы
├── package.json             # Зависимости и скрипты проекта
├── package-lock.json        # Лок-файл npm
├── README.md                # Документация проекта
├── tsconfig.json            # Настройки TypeScript + алиасы
└── types.d.ts               # Типы для .astro-файлов

🎨 Глобальные стили
Файлы variables.scss и mixins.scss автоматически подключаются ко всем SCSS-файлам проекта через настройку vite.css.preprocessorOptions. Не требуется ручной @use.

lient" />
Подключает типы для .astro файлов.

ts
Копировать
Редактировать
// Расширяет JSX-элементы React, чтобы поддерживать теги из three.js
import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}
Добавляет поддержку трехмерных компонентов из @react-three/fiber напрямую в JSX.

ts
Копировать
Редактировать
// Глобальные переменные для Lenis
declare global {
  interface Window {
    lenis: import('@studio-freight/lenis').Lenis;
    __onLenisReady?: ((lenis: any) => void)[];
  }
}
Определяет глобальный объект window.lenis для доступа к экземпляру кастомного скролла Lenis по всему проекту.

🔄 Swup — анимации между страницами
Проект использует Swup для плавных переходов между страницами. Он уже настроен и подключен с плагинами:

@swup/js-plugin

@swup/preload-plugin

@swup/progress-plugin

@swup/parallel-plugin

Swup автоматически инициализируется при загрузке страницы, управляет переходами, прелоадом и индикатором загрузки. Визуальные эффекты подключаются через data-swup-transition.

