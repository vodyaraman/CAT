import { useRef, useState, useEffect } from "react";
import BurgerIcon from "../../../assets/icons/burger-icon.svg";
import type { BurgerLink, BurgerMenuProps } from "@/types/components.interfaces";

const BurgerMenu: React.FC<BurgerMenuProps> = ({ links }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const defaultLinks: BurgerLink[] = [
    { label: "Главная", href: "/" },
    { label: "Каталог 1", href: "/" },
    { label: "Каталог 2", href: "/" },
    { label: "Тест 404", href: "/404" },
  ];

  const menuLinks = links || defaultLinks;

  useEffect(() => {
    burgerRef.current = document.querySelector(".header__burger");
    if (burgerRef.current) {
      burgerRef.current.addEventListener("click", handleOpen);
    }
    return () => {
      burgerRef.current?.removeEventListener("click", handleOpen);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <aside className="header__burger">
        <span>МЕНЮ</span>
        <img src={BurgerIcon.src} alt="Меню" className="header__burger icon" />
      </aside>

      {isOpen && (
        <div
          className="burger-menu-wrapper"
          ref={wrapperRef}
          onClick={(e) => {
            if (
              menuRef.current &&
              !menuRef.current.contains(e.target as Node)
            ) {
              handleClose();
            }
          }}
        >
          <div className="burger-menu" ref={menuRef}>
            <button className="burger-menu__close" onClick={handleClose}>
              ×
            </button>
            <nav className="burger-menu__nav">
              <h2 className="burger-menu__title">Меню</h2>
              <ul className="burger-menu__list">
                {menuLinks.map(({ label, href }) => (
                  <li key={href} className="burger-menu__item">
                    <a href={href} className="burger-menu__link">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

    </>
  );
};

export default BurgerMenu;
