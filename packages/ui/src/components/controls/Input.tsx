import type {JSX} from 'preact';
import styles from './Controls.module.scss';

type InputProps = JSX.InputHTMLAttributes<HTMLInputElement>;

export function Input({onChange, onChangeCapture, ...props}: InputProps) {
  return (
    <input
      onChangeCapture={onChangeCapture ?? onChange}
      onChange={onChangeCapture ? onChange : undefined}
      className={styles.input}
      {...props}
    />
  );
}
