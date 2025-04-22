import { useState } from 'react';
import Loader from '@/components/icons/Loader';
import './buttons.scss';

interface LinkButtonProps {
  text: string;
  href: string;
  className?: string;
}

export default function LinkButton({ text, href, className = '' }: LinkButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setLoading(true);
  };

  return (
    <a href={href} aria-label={text} className={`main-button ${className}`} onClick={handleClick}>
      <span className="main-button__text">
        {loading ? <Loader /> : text}
      </span>
    </a>
  );
}
