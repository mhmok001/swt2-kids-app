import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  error,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  const containerClasses = [
    styles.container,
    error && styles.error,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
      <input className={styles.input} {...props} />
      {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
