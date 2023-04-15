import style from './Button.module.scss';

interface IButton {
  children: any;
  onClick?: () => void;
  className?: string;
}

const Button = ({ onClick, className, children }: IButton) => {
  return (
    <button onClick={onClick} className={`${style.btn} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
