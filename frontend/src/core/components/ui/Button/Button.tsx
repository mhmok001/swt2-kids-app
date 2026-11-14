import { LucideIcon } from "lucide-react";
import styles from './Button.module.scss';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary'
    icon: LucideIcon;
    label: string;
    isActive: boolean;
}
const Button: React.FC<ButtonProps> = ({
    variant,
    label,
    icon: Icon,
    isActive: isPressed,
    ...props }) => {
    const pressedIconColor = isPressed ? `${styles.icon} ${styles.iconIsPressed}` : `${styles.icon} ${styles.iconColor}`;
    return (
        <button
            className={styles.button}
            {...props}
        >
            <span className={pressedIconColor}>
                <Icon size={18} />
            </span>
            {variant === 'primary' && <span className={styles.iconText}>
                {label}
            </span>}
        </button >
    );
}

export default Button;
