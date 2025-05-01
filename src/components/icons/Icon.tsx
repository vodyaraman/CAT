import clsx from 'clsx';
import './Icon.scss';

interface IconProps {
    id: string;
    className?: string;
}

export default function Icon({ id, className }: IconProps) {
    return (
        <svg className={clsx("icon-sprite", className)} viewBox="0 0 24 24">
            <use href={`#${id}`} />
        </svg>
    )
}