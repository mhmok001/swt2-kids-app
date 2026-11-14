import { LucideIcon } from "lucide-react";
import styles from './IconButton.module.scss';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: LucideIcon;
    enabledHover: boolean;
}
const IconButton: React.FC<IconButtonProps> = ({
    icon: Icon,
    enabledHover,
    ...props
}) => {
    return (
        <button
            className={styles.button}
            {...props}
        >
            <span className={enabledHover ? styles.iconWithHover : styles.iconWithoutHover}>
                <Icon size={18} />
            </span>
        </button>
    );
}

export default IconButton;
