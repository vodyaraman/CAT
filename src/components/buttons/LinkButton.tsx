import './buttons.scss';

interface LinkButtonProps {
  text: string;
  href: string;
  className?: string;
}

export default function LinkButton({ text, href, className = '' }: LinkButtonProps) {
  return (
    <a href={href} className={`main-button ${className}`}>
      <span className="main-button__text">{text}</span>
    </a>
  );
}
